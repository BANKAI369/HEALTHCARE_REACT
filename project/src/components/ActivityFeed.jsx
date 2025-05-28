import React from 'react';
import { activityData } from '../data/mockData';
import { Calendar } from 'lucide-react';

const barColors = [
  '#6366f1', // main
  '#818cf8', // lighter
  '#a5b4fc', // lighter
  '#c7d2fe', // lightest
  '#818cf8',
  '#6366f1',
  '#818cf8'
];

const ActivityFeed = () => {
  const max = Math.max(...activityData.data);

  return (
    <div
      style={{
        background: 'white',
        borderRadius: 16,
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
        padding: 24,
        height: '100%',
        minWidth: 260,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1e293b', margin: 0 }}>Activity</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 13,
            color: '#6366f1',
            fontWeight: 500,
            background: '#eef2ff',
            padding: '4px 10px',
            borderRadius: 8
          }}
        >
          <Calendar style={{ height: 16, width: 16, marginRight: 6 }} />
          <span>
            {activityData.count} appointments on {activityData.period}
          </span>
        </div>
      </div>
      <div
        style={{
          height: 110,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 6,
          gap: 8
        }}
      >
        {activityData.data.map((value, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 18 }}>
            <div
              style={{
                height: `${(value / max) * 90 + 10}px`,
                width: 14,
                background: barColors[index % barColors.length],
                borderRadius: '6px 6px 0 0',
                transition: 'background 0.2s',
                marginBottom: 4,
                boxShadow: '0 1px 4px 0 rgba(99,102,241,0.08)'
              }}
              title={value}
            ></div>
            <span style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
              {String.fromCharCode(65 + index)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;