import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Candidate A', probability: 0.65 },
  { name: 'Candidate B', probability: 0.35 },
];

const PredictionChart = () => {
  return (
    <div className="bg-cyber-black p-4 rounded-sm border border-cyber-green-700">
      <h2 className="text-sm font-mono font-semibold mb-2 text-cyber-green-400">Current Predictions</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1a4d2e" />
          <XAxis dataKey="name" tick={{ fill: '#28ff47', fontSize: 10 }} />
          <YAxis tick={{ fill: '#28ff47', fontSize: 10 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #18992b' }}
            labelStyle={{ color: '#28ff47' }}
          />
          <Bar dataKey="probability" fill="#28ff47" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionChart;
