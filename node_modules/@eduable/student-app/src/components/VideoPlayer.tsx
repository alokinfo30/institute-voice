import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Slider,
  IconButton,
  Button,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Fullscreen,
  Speed,
  ClosedCaption,
} from '@mui/icons-material';
import { apiClient } from '@eduable/shared-utils';

interface VideoPlayerProps {
  content: any;
  onProgressUpdate: (progress: number, timeSpent: number) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ content, onProgressUpdate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const newProgress = (video.currentTime / video.duration) * 100;
      setProgress(newProgress);
      setCurrentTime(video.currentTime);
      
      // Report progress to parent every 30 seconds
      if (Math.floor(video.currentTime) % 30 === 0) {
        onProgressUpdate(newProgress, Math.floor(video.currentTime));
      }
    };

    const updateBuffered = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const bufferedPercent = (bufferedEnd / video.duration) * 100;
        setBuffered(bufferedPercent);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('progress', updateBuffered);
    video.addEventListener('loadedmetadata', () => {
      setDuration(video.duration);
    });

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('progress', updateBuffered);
    };
  }, [onProgressUpdate]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event: Event, newValue: number | number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const seekTime = (newValue as number) * duration / 100;
    video.currentTime = seekTime;
    setProgress(newValue as number);
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = newValue as number / 100;
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const changePlaybackRate = () => {
    const video = videoRef.current;
    if (!video) return;

    const rates = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    const newRate = rates[nextIndex];
    
    video.playbackRate = newRate;
    setPlaybackRate(newRate);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
      <CardContent sx={{ p: 0 }}>
        {/* Video Container */}
        <Box sx={{ position: 'relative', backgroundColor: 'black' }}>
          <video
            ref={videoRef}
            src={content.videoUrl}
            style={{ width: '100%', height: '400px', display: 'block' }}
            poster={content.thumbnail}
            onClick={togglePlay}
          />
          
          {/* Custom Controls */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              p: 2,
            }}
          >
            {/* Progress Bar */}
            <Box sx={{ mb: 1 }}>
              <Slider
                value={progress}
                onChange={handleSeek}
                sx={{
                  color: 'primary.main',
                  '& .MuiSlider-track': { height: 4 },
                  '& .MuiSlider-rail': { height: 4 },
                  '& .MuiSlider-thumb': { width: 16, height: 16 },
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color="white">
                  {formatTime(currentTime)}
                </Typography>
                <Typography variant="caption" color="white">
                  {formatTime(duration)}
                </Typography>
              </Box>
            </Box>

            {/* Control Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={togglePlay} sx={{ color: 'white' }}>
                {isPlaying ? <Pause /> : <PlayArrow />}
              </IconButton>

              <IconButton onClick={toggleMute} sx={{ color: 'white' }}>
                {isMuted || volume === 0 ? <VolumeOff /> : <VolumeUp />}
              </IconButton>

              <Slider
                value={volume * 100}
                onChange={handleVolumeChange}
                sx={{
                  width: 80,
                  color: 'white',
                  '& .MuiSlider-track': { height: 2 },
                  '& .MuiSlider-rail': { height: 2 },
                  '& .MuiSlider-thumb': { width: 12, height: 12 },
                }}
              />

              <IconButton onClick={changePlaybackRate} sx={{ color: 'white' }}>
                <Speed />
                <Typography variant="caption" sx={{ ml: 0.5, color: 'white' }}>
                  {playbackRate}x
                </Typography>
              </IconButton>

              <IconButton sx={{ color: 'white' }}>
                <ClosedCaption />
              </IconButton>

              <Box sx={{ flex: 1 }} />

              <IconButton sx={{ color: 'white' }}>
                <Fullscreen />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Video Info */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            {content.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {content.description}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            <Chip label={`${Math.round(content.duration / 60)} min`} size="small" />
            <Chip label={content.difficulty} size="small" variant="outlined" />
            <Chip label={content.category} size="small" variant="outlined" />
          </Box>

          {/* Learning Objectives */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom fontWeight="bold">
              Learning Objectives
            </Typography>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {content.learningObjectives?.map((objective: string, index: number) => (
                <li key={index}>
                  <Typography variant="body2" color="textSecondary">
                    {objective}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined" size="small">
              Download Notes
            </Button>
            <Button variant="outlined" size="small">
              Practice Exercises
            </Button>
            <Button variant="outlined" size="small">
              Ask Doubt
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;