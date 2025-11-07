import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Card, Typography, Tab, Tabs, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const DebugView = ({ session, onClose }) => {
    const [activeTab, setActiveTab] = useState('logs');
    const [logs, setLogs] = useState([]);
    const [profileData, setProfileData] = useState([]);
    const [snapshot, setSnapshot] = useState(null);
    const [logFilter, setLogFilter] = useState(null);
    const [autoRefresh, setAutoRefresh] = useState(true);
    const refreshInterval = useRef();
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
    return (_jsxs(Box, { sx: { p: 2 }, children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', mb: 2 }, children: [_jsxs(Typography, { variant: "h5", children: ["Debug Session: ", session.getId()] }), _jsxs(Box, { children: [_jsxs(Button, { variant: "outlined", onClick: () => setAutoRefresh(!autoRefresh), sx: { mr: 1 }, children: [autoRefresh ? 'Pause' : 'Resume', " Updates"] }), onClose && (_jsx(Button, { variant: "outlined", color: "secondary", onClick: onClose, children: "Close" }))] })] }), _jsxs(Tabs, { value: activeTab, onChange: (_, v) => setActiveTab(v), sx: { mb: 2 }, children: [_jsx(Tab, { label: "Logs", value: "logs" }), _jsx(Tab, { label: "Memory", value: "memory" }), _jsx(Tab, { label: "CPU", value: "cpu" }), _jsx(Tab, { label: "Snapshot", value: "snapshot" })] }), activeTab === 'logs' && (_jsxs(Card, { variant: "outlined", sx: { p: 2 }, children: [_jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Button, { variant: logFilter === null ? 'contained' : 'outlined', onClick: () => setLogFilter(null), sx: { mr: 1 }, children: "All" }), ['debug', 'info', 'warn', 'error'].map(level => (_jsx(Button, { variant: logFilter === level ? 'contained' : 'outlined', onClick: () => setLogFilter(level), sx: { mr: 1 }, color: level === 'error' ? 'error' : level === 'warn' ? 'warning' : 'primary', children: level }, level)))] }), _jsx(Box, { sx: { maxHeight: 600, overflow: 'auto' }, children: _jsxs(Table, { size: "small", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Time" }), _jsx(TableCell, { children: "Level" }), _jsx(TableCell, { children: "Message" }), _jsx(TableCell, { children: "Context" })] }) }), _jsx(TableBody, { children: filteredLogs.map((log, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: new Date(log.timestamp).toLocaleTimeString() }), _jsx(TableCell, { children: _jsx(Typography, { color: log.level === 'error'
                                                        ? 'error'
                                                        : log.level === 'warn'
                                                            ? 'warning'
                                                            : 'primary', children: log.level }) }), _jsx(TableCell, { children: log.message }), _jsx(TableCell, { children: log.context && (_jsx("pre", { children: JSON.stringify(log.context, null, 2) })) })] }, index))) })] }) })] })), activeTab === 'memory' && (_jsx(Card, { variant: "outlined", sx: { p: 2 }, children: _jsx(Line, { data: memoryChartData, options: {
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
                    } }) })), activeTab === 'cpu' && (_jsx(Card, { variant: "outlined", sx: { p: 2 }, children: _jsx(Line, { data: cpuChartData, options: {
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
                    } }) })), activeTab === 'snapshot' && snapshot && (_jsxs(Card, { variant: "outlined", sx: { p: 2 }, children: [_jsx(Typography, { variant: "h6", gutterBottom: true, children: "System Snapshot" }), _jsxs(Box, { sx: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }, children: [_jsxs(Card, { variant: "outlined", sx: { p: 2 }, children: [_jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "Memory" }), _jsx(Table, { size: "small", children: _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "Heap Used" }), _jsxs(TableCell, { children: [(snapshot.memory.heapUsed / 1024 / 1024).toFixed(2), " MB"] })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Heap Total" }), _jsxs(TableCell, { children: [(snapshot.memory.heapTotal / 1024 / 1024).toFixed(2), " MB"] })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "External" }), _jsxs(TableCell, { children: [(snapshot.memory.external / 1024 / 1024).toFixed(2), " MB"] })] })] }) })] }), _jsxs(Card, { variant: "outlined", sx: { p: 2 }, children: [_jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "CPU" }), _jsx(Table, { size: "small", children: _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "User CPU" }), _jsxs(TableCell, { children: [(snapshot.cpu.user / 1000000).toFixed(2), "%"] })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "System CPU" }), _jsxs(TableCell, { children: [(snapshot.cpu.system / 1000000).toFixed(2), "%"] })] })] }) })] }), _jsxs(Card, { variant: "outlined", sx: { p: 2 }, children: [_jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "Event Loop" }), _jsx(Table, { size: "small", children: _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "Latency" }), _jsxs(TableCell, { children: [snapshot.eventLoop.latency.toFixed(2), "ms"] })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Lag" }), _jsxs(TableCell, { children: [snapshot.eventLoop.lag.toFixed(2), "ms"] })] })] }) })] }), _jsxs(Card, { variant: "outlined", sx: { p: 2 }, children: [_jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: "Garbage Collection" }), _jsx(Table, { size: "small", children: _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "Collections" }), _jsx(TableCell, { children: snapshot.gc.collections })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Duration" }), _jsxs(TableCell, { children: [snapshot.gc.duration, "ms"] })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Type" }), _jsx(TableCell, { children: snapshot.gc.type })] })] }) })] })] })] }))] }));
};
