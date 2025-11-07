import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const DebugViewContainer = styled.div`
  padding: 20px;
  background: #f5f5f5;
  border-radius: 4px;
`;

const DebugHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const DebugStats = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background: white;
  border-radius: 4px;
`;

const DebugChart = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background: white;
  border-radius: 4px;
  height: 300px;
`;

const DebugLog = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const DebugEntry = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  border-radius: 4px;
`;

const DebugEntryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Scope = styled.span`
  font-weight: bold;
`;

const Time = styled.span`
  color: #666;
`;

const DebugData = styled.pre`
  margin: 0;
  padding: 10px;
  background: #f8f8f8;
  border-radius: 2px;
  font-size: 12px;
`;

const CallStack = styled.pre`
  margin: 5px 0 0;
  padding: 10px;
  background: #f8f8f8;
  font-size: 11px;
  color: #666;
`;

interface DebugSnapshot {
  timestamp: number;
  scope: string;
  data: any;
  metadata: {
    memory?: {
      heapUsed: number;
      heapTotal: number;
    };
    callStack?: string[];
  };
}

interface DebugViewProps {
  apiEndpoint: string;
  refreshInterval?: number;
}

export const DebugView: React.FC<DebugViewProps> = ({
  apiEndpoint,
  refreshInterval = 5000
}) => {
  const [snapshots, setSnapshots] = useState<DebugSnapshot[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [selectedScope, setSelectedScope] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [snapshotsRes, statsRes] = await Promise.all([
          fetch(`${apiEndpoint}/snapshots`).then(r => r.json()),
          fetch(`${apiEndpoint}/snapshots/stats`).then(r => r.json())
        ]);
        setSnapshots(snapshotsRes.snapshots);
        setStats(statsRes);
      } catch (error) {
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

  return (
    <div className="debug-view">
      <div className="debug-header">
        <h2>Debug Monitor</h2>
        <select 
          value={selectedScope}
          onChange={e => setSelectedScope(e.target.value)}
        >
          {scopes.map(scope => (
            <option key={scope} value={scope}>
              {scope}
            </option>
          ))}
        </select>
      </div>

      {stats && (
        <div className="debug-stats">
          <div>Total Snapshots: {stats.totalSnapshots}</div>
          <div>Anomalies: {stats.anomalyCount}</div>
          {stats.scopeStats.map((stat: any) => (
            <div key={stat.scope}>
              {stat.scope}: {stat.count} snapshots, 
              avg {stat.averageDuration.toFixed(2)}ms
            </div>
          ))}
        </div>
      )}

      <div className="debug-chart" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={memoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="timestamp"
              tickFormatter={(val: number) => `${(val / 1000).toFixed(1)}s`}
            />
            <YAxis 
              tickFormatter={(val: number) => `${(val / 1024 / 1024).toFixed(1)}MB`}
            />
            <Tooltip
              formatter={(value: number) => 
                `${(value / 1024 / 1024).toFixed(1)}MB`
              }
              labelFormatter={(val: number) => `${(val / 1000).toFixed(1)}s`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="heapUsed"
              stroke="#8884d8"
              name="Heap Used"
            />
            <Line
              type="monotone"
              dataKey="heapTotal"
              stroke="#82ca9d"
              name="Heap Total"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="debug-log">
        {filteredSnapshots.slice(-10).reverse().map((snapshot, i) => (
          <div key={i} className="debug-entry">
            <div className="debug-entry-header">
              <span className="scope">{snapshot.scope}</span>
              <span className="time">
                {(snapshot.timestamp / 1000).toFixed(1)}s
              </span>
            </div>
            <pre className="debug-data">
              {JSON.stringify(snapshot.data, null, 2)}
            </pre>
            {snapshot.metadata.callStack && (
              <details>
                <summary>Call Stack</summary>
                <pre className="call-stack">
                  {snapshot.metadata.callStack.join('\n')}
                </pre>
              </details>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};