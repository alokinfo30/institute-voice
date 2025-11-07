import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Card, Typography, Tab, Tabs, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { DebugSession } from '../../../shared-utils/src/debugging/DebugSession';
import { LogEntry, ProfileData, DebugSnapshot, LogLevel } from '../../../shared-utils/src/debugging/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DebugViewProps {
  session: DebugSession;
  onClose?: () => void;
}

export const DebugView: React.FC<DebugViewProps> = ({ session, onClose }) => {
  const [activeTab, setActiveTab] = useState('logs');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [profileData, setProfileData] = useState<ProfileData[]>([]);
  const [snapshot, setSnapshot] = useState<DebugSnapshot | null>(null);
  const [logFilter, setLogFilter] = useState<LogLevel | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const refreshInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const updateData = () => {
      setLogs(session.getLogs({ limit: 1000 }));
      setProfileData(session.getProfileData());
      setSnapshot(session.takeSnapshot());
    };

    updateData();

    if (autoRefresh) {
      refreshInterval.current = setInterval(updateData, 1000);
    }

    return () => {
      if (refreshInterval.current) {
        clearInterval(refreshInterval.current);
      }
    };
  }, [session, autoRefresh]);

  const filteredLogs = logFilter ? logs.filter(log => log.level === logFilter) : logs;

  const memoryChartData = {
    labels: profileData.map(p => new Date(p.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Heap Used (MB)',
        data: profileData.map(p => p.heapUsed / 1024 / 1024),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Heap Total (MB)',
        data: profileData.map(p => p.heapTotal / 1024 / 1024),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const cpuChartData = {
    labels: profileData.map(p => new Date(p.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'CPU User',
        data: profileData.map(p => p.cpuUser / 1000000),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'CPU System',
        data: profileData.map(p => p.cpuSystem / 1000000),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5">Debug Session: {session.getId()}</Typography>
        <Box>
          <Button
            variant="outlined"
            onClick={() => setAutoRefresh(!autoRefresh)}
            sx={{ mr: 1 }}
          >
            {autoRefresh ? 'Pause' : 'Resume'} Updates
          </Button>
          {onClose && (
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Close
            </Button>
          )}
        </Box>
      </Box>

      <Tabs value={activeTab} onChange={(_, v) => setActiveTab(v)} sx={{ mb: 2 }}>
        <Tab label="Logs" value="logs" />
        <Tab label="Memory" value="memory" />
        <Tab label="CPU" value="cpu" />
        <Tab label="Snapshot" value="snapshot" />
      </Tabs>

      {activeTab === 'logs' && (
        <Card variant="outlined" sx={{ p: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Button
              variant={logFilter === null ? 'contained' : 'outlined'}
              onClick={() => setLogFilter(null)}
              sx={{ mr: 1 }}
            >
              All
            </Button>
            {(['debug', 'info', 'warn', 'error'] as LogLevel[]).map(level => (
              <Button
                key={level}
                variant={logFilter === level ? 'contained' : 'outlined'}
                onClick={() => setLogFilter(level)}
                sx={{ mr: 1 }}
                color={level === 'error' ? 'error' : level === 'warn' ? 'warning' : 'primary'}
              >
                {level}
              </Button>
            ))}
          </Box>
          <Box sx={{ maxHeight: 600, overflow: 'auto' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Level</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Context</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </TableCell>
                    <TableCell>
                      <Typography
                        color={
                          log.level === 'error'
                            ? 'error'
                            : log.level === 'warn'
                            ? 'warning'
                            : 'primary'
                        }
                      >
                        {log.level}
                      </Typography>
                    </TableCell>
                    <TableCell>{log.message}</TableCell>
                    <TableCell>
                      {log.context && (
                        <pre>
                          {JSON.stringify(log.context, null, 2)}
                        </pre>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Card>
      )}

      {activeTab === 'memory' && (
        <Card variant="outlined" sx={{ p: 2 }}>
          <Line
            data={memoryChartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Memory Usage Over Time'
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Memory (MB)'
                  }
                }
              }
            }}
          />
        </Card>
      )}

      {activeTab === 'cpu' && (
        <Card variant="outlined" sx={{ p: 2 }}>
          <Line
            data={cpuChartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'CPU Usage Over Time'
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'CPU Usage (%)'
                  }
                }
              }
            }}
          />
        </Card>
      )}

      {activeTab === 'snapshot' && snapshot && (
        <Card variant="outlined" sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            System Snapshot
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <Card variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Memory
              </Typography>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Heap Used</TableCell>
                    <TableCell>{(snapshot.memory.heapUsed / 1024 / 1024).toFixed(2)} MB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Heap Total</TableCell>
                    <TableCell>{(snapshot.memory.heapTotal / 1024 / 1024).toFixed(2)} MB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>External</TableCell>
                    <TableCell>{(snapshot.memory.external / 1024 / 1024).toFixed(2)} MB</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <Card variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                CPU
              </Typography>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>User CPU</TableCell>
                    <TableCell>{(snapshot.cpu.user / 1000000).toFixed(2)}%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>System CPU</TableCell>
                    <TableCell>{(snapshot.cpu.system / 1000000).toFixed(2)}%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <Card variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Event Loop
              </Typography>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Latency</TableCell>
                    <TableCell>{snapshot.eventLoop.latency.toFixed(2)}ms</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lag</TableCell>
                    <TableCell>{snapshot.eventLoop.lag.toFixed(2)}ms</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <Card variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Garbage Collection
              </Typography>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Collections</TableCell>
                    <TableCell>{snapshot.gc.collections}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Duration</TableCell>
                    <TableCell>{snapshot.gc.duration}ms</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>{snapshot.gc.type}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </Box>
        </Card>
      )}
    </Box>
  );
};