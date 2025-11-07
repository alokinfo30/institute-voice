import { WebSocketServer } from 'ws';
import { Server } from 'http';
import { Redis } from 'ioredis';
import { RoomManager } from './RoomManager';
import { SessionManager } from './SessionManager';
import { EventEmitter } from 'events';

export class RealtimeService extends EventEmitter {
  private wss: WebSocketServer;
  private redis: Redis;
  private roomManager: RoomManager;
  private sessionManager: SessionManager;

  constructor(server: Server, redisUrl: string) {
    super();
    this.wss = new WebSocketServer({ server });
    this.redis = new Redis(redisUrl);
    this.roomManager = new RoomManager(this.redis);
    this.sessionManager = new SessionManager(this.redis);

    this.initialize();
  }

  private initialize() {
    this.wss.on('connection', async (ws, req) => {
      const sessionId = this.extractSessionId(req);
      const session = await this.sessionManager.getSession(sessionId);

      if (!session) {
        ws.close(4001, 'Unauthorized');
        return;
      }

      ws.on('message', async (data) => {
        try {
          const message = JSON.parse(data.toString());
          await this.handleMessage(ws, session, message);
        } catch (error) {
          console.error('Error handling message:', error);
          ws.send(JSON.stringify({ error: 'Invalid message format' }));
        }
      });

      // Set up heartbeat
      const pingInterval = setInterval(() => {
        if (ws.readyState === ws.OPEN) {
          ws.ping();
        }
      }, 30000);

      ws.on('close', () => {
        clearInterval(pingInterval);
        this.handleDisconnect(session);
      });
    });
  }

  private async handleMessage(ws: any, session: any, message: any) {
    switch (message.type) {
      case 'join_room':
        await this.roomManager.joinRoom(message.roomId, session.userId);
        this.broadcastToRoom(message.roomId, {
          type: 'user_joined',
          userId: session.userId
        });
        break;

      case 'leave_room':
        await this.roomManager.leaveRoom(message.roomId, session.userId);
        this.broadcastToRoom(message.roomId, {
          type: 'user_left',
          userId: session.userId
        });
        break;

      case 'chat_message':
        await this.handleChatMessage(message, session);
        break;

      case 'cursor_position':
        this.broadcastToRoom(message.roomId, {
          type: 'cursor_moved',
          userId: session.userId,
          position: message.position
        });
        break;

      case 'document_update':
        await this.handleDocumentUpdate(message, session);
        break;

      case 'raise_hand':
        await this.handleRaiseHand(message, session);
        break;

      default:
        ws.send(JSON.stringify({ error: 'Unknown message type' }));
    }
  }

  private async handleChatMessage(message: any, session: any) {
    const formattedMessage = {
      type: 'chat_message',
      roomId: message.roomId,
      userId: session.userId,
      content: message.content,
      timestamp: new Date().toISOString()
    };

    await this.redis.lpush(
      `chat:${message.roomId}`,
      JSON.stringify(formattedMessage)
    );

    this.broadcastToRoom(message.roomId, formattedMessage);
  }

  private async handleDocumentUpdate(message: any, session: any) {
    // Implement Operational Transform for collaborative editing
    const transform = await this.transformOperation(message.operation);
    
    await this.redis.lpush(
      `document:${message.documentId}:operations`,
      JSON.stringify({
        operation: transform,
        userId: session.userId,
        timestamp: new Date().toISOString()
      })
    );

    this.broadcastToRoom(message.roomId, {
      type: 'document_updated',
      documentId: message.documentId,
      operation: transform,
      userId: session.userId
    });
  }

  private async handleRaiseHand(message: any, session: any) {
    const notification = {
      type: 'hand_raised',
      userId: session.userId,
      roomId: message.roomId,
      timestamp: new Date().toISOString()
    };

    await this.redis.lpush(
      `notifications:${message.roomId}`,
      JSON.stringify(notification)
    );

    this.broadcastToRoom(message.roomId, notification);
  }

  private async transformOperation(operation: any) {
    // Implement OT transformation logic here
    return operation;
  }

  private broadcastToRoom(roomId: string, message: any) {
    this.wss.clients.forEach((client: any) => {
      if (client.roomId === roomId && client.readyState === client.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }

  private extractSessionId(req: any): string {
    // Extract session ID from request headers or query parameters
    return req.headers['x-session-id'] || req.url.split('session=')[1];
  }

  private async handleDisconnect(session: any) {
    // Clean up user presence and notify others
    const rooms = await this.roomManager.getUserRooms(session.userId);
    
    for (const roomId of rooms) {
      await this.roomManager.leaveRoom(roomId, session.userId);
      this.broadcastToRoom(roomId, {
        type: 'user_disconnected',
        userId: session.userId
      });
    }
  }
}