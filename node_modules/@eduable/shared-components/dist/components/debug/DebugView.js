import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const DebugViewContainer = styled.div `
  padding: 20px;
  background: #f5f5f5;
  border-radius: 4px;
`;
const DebugHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const DebugStats = styled.div `
  margin-bottom: 20px;
  padding: 10px;
  background: white;
  border-radius: 4px;
`;
const DebugChart = styled.div `
  margin-bottom: 20px;
  padding: 10px;
  background: white;
  border-radius: 4px;
  height: 300px;
`;
const DebugLog = styled.div `
  max-height: 500px;
  overflow-y: auto;
`;
const DebugEntry = styled.div `
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  border-radius: 4px;
`;
const DebugEntryHeader = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
const Scope = styled.span `
  font-weight: bold;
`;
const Time = styled.span `
  color: #666;
`;
const DebugData = styled.pre `
  margin: 0;
  padding: 10px;
  background: #f8f8f8;
  border-radius: 2px;
  font-size: 12px;
`;
const CallStack = styled.pre `
  margin: 5px 0 0;
  padding: 10px;
  background: #f8f8f8;
  font-size: 11px;
  color: #666;
`;
export const DebugView = ({ apiEndpoint, refreshInterval = 5000 }) => {
    const [snapshots, setSnapshots] = useState([]);
    const [stats, setStats] = useState(null);
    const [selectedScope, setSelectedScope] = useState('all');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [snapshotsRes, statsRes] = await Promise.all([
                    fetch(`${apiEndpoint}/snapshots`).then(r => r.json()),
                    fetch(`${apiEndpoint}/snapshots/stats`).then(r => r.json())
                ]);
                setSnapshots(snapshotsRes.snapshots);
                setStats(statsRes);
            }
            catch (error) {
                console.error('Failed to fetch debug data:', error);
            }
        };
        fetchData();
        const interval = setInterval(fetchData, refreshInterval);
        return () => clearInterval(interval);
    }, [apiEndpoint, refreshInterval]);
    const filteredSnapshots = selectedScope === 'all'
        ? snapshots
        : snapshots.filter(s => s.scope === selectedScope);
    const scopes = ['all', ...new Set(snapshots.map(s => s.scope))];
    const memoryData = filteredSnapshots.map(s => ({
        timestamp: s.timestamp,
        heapUsed: s.metadata.memory?.heapUsed || 0,
        heapTotal: s.metadata.memory?.heapTotal || 0
    }));
    return (_jsxs("div", { className: "debug-view", children: [_jsxs("div", { className: "debug-header", children: [_jsx("h2", { children: "Debug Monitor" }), _jsx("select", { value: selectedScope, onChange: e => setSelectedScope(e.target.value), children: scopes.map(scope => (_jsx("option", { value: scope, children: scope }, scope))) })] }), stats && (_jsxs("div", { className: "debug-stats", children: [_jsxs("div", { children: ["Total Snapshots: ", stats.totalSnapshots] }), _jsxs("div", { children: ["Anomalies: ", stats.anomalyCount] }), stats.scopeStats.map((stat) => (_jsxs("div", { children: [stat.scope, ": ", stat.count, " snapshots, avg ", stat.averageDuration.toFixed(2), "ms"] }, stat.scope)))] })), _jsx("div", { className: "debug-chart", style: { height: 300 }, children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: memoryData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "timestamp", tickFormatter: (val) => `${(val / 1000).toFixed(1)}s` }), _jsx(YAxis, { tickFormatter: (val) => `${(val / 1024 / 1024).toFixed(1)}MB` }), _jsx(Tooltip, { formatter: (value) => `${(value / 1024 / 1024).toFixed(1)}MB`, labelFormatter: (val) => `${(val / 1000).toFixed(1)}s` }), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "heapUsed", stroke: "#8884d8", name: "Heap Used" }), _jsx(Line, { type: "monotone", dataKey: "heapTotal", stroke: "#82ca9d", name: "Heap Total" })] }) }) }), _jsx("div", { className: "debug-log", children: filteredSnapshots.slice(-10).reverse().map((snapshot, i) => (_jsxs("div", { className: "debug-entry", children: [_jsxs("div", { className: "debug-entry-header", children: [_jsx("span", { className: "scope", children: snapshot.scope }), _jsxs("span", { className: "time", children: [(snapshot.timestamp / 1000).toFixed(1), "s"] })] }), _jsx("pre", { className: "debug-data", children: JSON.stringify(snapshot.data, null, 2) }), snapshot.metadata.callStack && (_jsxs("details", { children: [_jsx("summary", { children: "Call Stack" }), _jsx("pre", { className: "call-stack", children: snapshot.metadata.callStack.join('\n') })] }))] }, i))) }), _jsx("style", { jsx: true, children: `
        .debug-view {
          padding: 20px;
          background: #f5f5f5;
          border-radius: 4px;
        }
        .debug-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .debug-stats {
          margin-bottom: 20px;
          padding: 10px;
          background: white;
          border-radius: 4px;
        }
        .debug-chart {
          margin-bottom: 20px;
          padding: 10px;
          background: white;
          border-radius: 4px;
        }
        .debug-log {
          max-height: 500px;
          overflow-y: auto;
        }
        .debug-entry {
          margin-bottom: 10px;
          padding: 10px;
          background: white;
          border-radius: 4px;
        }
        .debug-entry-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        .scope {
          font-weight: bold;
        }
        .time {
          color: #666;
        }
        .debug-data {
          margin: 0;
          padding: 10px;
          background: #f8f8f8;
          border-radius: 2px;
          font-size: 12px;
        }
        .call-stack {
          margin: 5px 0 0;
          padding: 10px;
          background: #f8f8f8;
          font-size: 11px;
          color: #666;
        }
      ` })] }));
};
