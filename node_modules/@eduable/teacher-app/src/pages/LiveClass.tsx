import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Chip,
  Paper,
} from '@mui/material';
import {
  Videocam,
  VideocamOff,
  Mic,
  MicOff,
  ScreenShare,
  StopScreenShare,
  People,
  Chat,
  MoreVert,
  Send,
  RaiseHand,
} from '@mui/icons-material';
import { PageHeader } from '@eduable/shared-components';

const LiveClass: React.FC = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [raisedHands, setRaisedHands] = useState<string[]>([]);
  const [activeParticipants, setActiveParticipants] = useState<any[]>([]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const localStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    initializeMedia();
    return () => {
      cleanupMedia();
    };
  }, []);

  const initializeMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      localStreamRef.current = stream;
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const cleanupMedia = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const toggleVideo = () => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoOn(videoTrack.enabled);
      }
    }
  };

  const toggleAudio = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsAudioOn(audioTrack.enabled);
      }
    }
  };

  const toggleScreenShare = async () => {
    try {
      if (!isScreenSharing) {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true,
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = screenStream;
        }
        
        screenStream.getTracks()[0].onended = () => {
          toggleScreenShare();
        };
      } else {
        if (videoRef.current && localStreamRef.current) {
          videoRef.current.srcObject = localStreamRef.current;
        }
      }
      
      setIsScreenSharing(!isScreenSharing);
    } catch (error) {
      console.error('Error sharing screen:', error);
    }
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: 'Teacher',
        timestamp: new Date(),
        type: 'text',
      };
      
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const handleRaiseHand = (studentId: string) => {
    setRaisedHands(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  return (
    <Box>
      <PageHeader
        title="Live Class - Mathematics Grade 10"
        subtitle="Algebra: Quadratic Equations"
      />

      <Grid container spacing={2}>
        {/* Main Video Area */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ position: 'relative', backgroundColor: 'black' }}>
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  style={{ width: '100%', height: '500px', display: 'block' }}
                />
                
                {/* Class Controls */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <IconButton
                    onClick={toggleVideo}
                    sx={{ color: isVideoOn ? 'primary.main' : 'error.main' }}
                  >
                    {isVideoOn ? <Videocam /> : <VideocamOff />}
                  </IconButton>
                  
                  <IconButton
                    onClick={toggleAudio}
                    sx={{ color: isAudioOn ? 'primary.main' : 'error.main' }}
                  >
                    {isAudioOn ? <Mic /> : <MicOff />}
                  </IconButton>
                  
                  <IconButton
                    onClick={toggleScreenShare}
                    sx={{ color: isScreenSharing ? 'primary.main' : 'white' }}
                  >
                    {isScreenSharing ? <ScreenShare /> : <StopScreenShare />}
                  </IconButton>
                  
                  <IconButton sx={{ color: 'white' }}>
                    <People />
                  </IconButton>
                  
                  <IconButton sx={{ color: 'white' }}>
                    <MoreVert />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Class Tools */}
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Class Tools
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Button variant="outlined" size="small">
                      Whiteboard
                    </Button>
                    <Button variant="outlined" size="small">
                      Poll
                    </Button>
                    <Button variant="outlined" size="small">
                      Quiz
                    </Button>
                    <Button variant="outlined" size="small">
                      Breakout Rooms
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Raised Hands ({raisedHands.length})
                  </Typography>
                  <Box sx={{ maxHeight: 120, overflow: 'auto' }}>
                    {raisedHands.map(studentId => (
                      <Box
                        key={studentId}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          py: 0.5,
                        }}
                      >
                        <Avatar sx={{ width: 24, height: 24 }} />
                        <Typography variant="body2">Student {studentId}</Typography>
                        <Button size="small" variant="outlined">
                          Respond
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} lg={4}>
          {/* Participants */}
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Participants ({activeParticipants.length})
              </Typography>
              <List dense>
                {activeParticipants.map(participant => (
                  <ListItem key={participant.id}>
                    <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
                    <ListItemText
                      primary={participant.name}
                      secondary={participant.role}
                    />
                    {participant.role === 'student' && (
                      <IconButton
                        size="small"
                        onClick={() => handleRaiseHand(participant.id)}
                        color={raisedHands.includes(participant.id) ? 'primary' : 'default'}
                      >
                        <RaiseHand />
                      </IconButton>
                    )}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Chat */}
          <Card>
            <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: 400 }}>
              <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h6" fontWeight="bold">
                  Chat
                </Typography>
              </Box>
              
              <Box sx={{ flex: 1, overflow: 'auto', p: 1 }}>
                {messages.map(message => (
                  <Box
                    key={message.id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      mb: 1,
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: message.sender === 'Teacher' ? 'primary.light' : 'grey.100',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="caption" fontWeight="bold">
                        {message.sender}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {message.timestamp.toLocaleTimeString()}
                      </Typography>
                    </Box>
                    <Typography variant="body2">{message.text}</Typography>
                  </Box>
                ))}
              </Box>
              
              <Box sx={{ p: 1, borderTop: 1, borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    size="small"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    fullWidth
                  />
                  <IconButton onClick={sendMessage} color="primary">
                    <Send />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LiveClass;