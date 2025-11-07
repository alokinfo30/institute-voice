import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    credentials: true,
  },
})
export class WebsocketsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(WebsocketsGateway.name);
  private connectedUsers = new Map<string, string>(); // userId -> socketId

  constructor(private jwtService: JwtService) {}

  async handleConnection(socket: Socket) {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        socket.disconnect();
        return;
      }

      const payload = this.jwtService.verify(token);
      const userId = payload.sub;

      this.connectedUsers.set(userId, socket.id);
      socket.join(`user:${userId}`);
      
      // Join institute room for broadcast notifications
      socket.join(`institute:${payload.instituteId}`);

      this.logger.log(`User ${userId} connected with socket ${socket.id}`);
      
      // Notify about user online status
      this.server.to(`institute:${payload.instituteId}`).emit('user_online', { userId });
    } catch (error) {
      this.logger.error('WebSocket connection failed:', error);
      socket.disconnect();
    }
  }

  handleDisconnect(socket: Socket) {
    for (const [userId, socketId] of this.connectedUsers.entries()) {
      if (socketId === socket.id) {
        this.connectedUsers.delete(userId);
        this.logger.log(`User ${userId} disconnected`);
        
        // Notify about user offline status
        this.server.emit('user_offline', { userId });
        break;
      }
    }
  }

  @SubscribeMessage('join_course')
  handleJoinCourse(socket: Socket, courseId: string) {
    socket.join(`course:${courseId}`);
    this.logger.log(`Socket ${socket.id} joined course ${courseId}`);
  }

  @SubscribeMessage('leave_course')
  handleLeaveCourse(socket: Socket, courseId: string) {
    socket.leave(`course:${courseId}`);
    this.logger.log(`Socket ${socket.id} left course ${courseId}`);
  }

  @SubscribeMessage('typing_start')
  handleTypingStart(socket: Socket, data: { doubtId: string; userId: string }) {
    socket.to(`doubt:${data.doubtId}`).emit('user_typing', {
      userId: data.userId,
      doubtId: data.doubtId,
    });
  }

  @SubscribeMessage('typing_stop')
  handleTypingStop(socket: Socket, data: { doubtId: string; userId: string }) {
    socket.to(`doubt:${data.doubtId}`).emit('user_stopped_typing', {
      userId: data.userId,
      doubtId: data.doubtId,
    });
  }

  // Methods to emit events from services
  notifyUser(userId: string, event: string, data: any) {
    const socketId = this.connectedUsers.get(userId);
    if (socketId) {
      this.server.to(socketId).emit(event, data);
    }
  }

  notifyInstitute(instituteId: string, event: string, data: any) {
    this.server.to(`institute:${instituteId}`).emit(event, data);
  }

  notifyCourse(courseId: string, event: string, data: any) {
    this.server.to(`course:${courseId}`).emit(event, data);
  }

  getConnectedUsers(): string[] {
    return Array.from(this.connectedUsers.keys());
  }
}