import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', CandidateA: 0.4, CandidateB: 0.6 },
  { name: 'Feb', CandidateA: 0.45, CandidateB: 0.55 },
  { name: 'Mar', CandidateA: 0.48, CandidateB: 0.52 },
  { name: 'Apr', CandidateA: 0.52, CandidateB: 0.48 },
  { name: 'May', CandidateA: 0.55, CandidateB: 0.45 },
  { name: 'Jun', CandidateA: 0.58, CandidateB: 0.42 },
];

const PredictionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1a4d2e" />
        <XAxis dataKey="name" stroke="#28ff47" />
        <YAxis stroke="#28ff47" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #18992b' }}
          labelStyle={{ color: '#28ff47' }}
        />
        <Legend />
        <Line type="monotone" dataKey="CandidateA" stroke="#28ff47" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="CandidateB" stroke="#ff4747" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PredictionChart;
