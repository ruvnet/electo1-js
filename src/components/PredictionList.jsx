import React from 'react';

const predictions = [
  { id: 1, candidate: 'Candidate A', probability: 0.65, timestamp: '2023-10-01T12:00:00Z' },
  { id: 2, candidate: 'Candidate B', probability: 0.35, timestamp: '2023-10-01T12:05:00Z' },
];

const PredictionList = () => {
  return (
    <div className="bg-cyber-black p-4 rounded-sm border border-cyber-green-700">
      <h2 className="text-sm font-mono font-semibold mb-2 text-cyber-green-400">Recent Predictions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="bg-cyber-green-900">
              <th className="px-2 py-1 text-left text-cyber-green-300">Candidate</th>
              <th className="px-2 py-1 text-left text-cyber-green-300">Probability</th>
              <th className="px-2 py-1 text-left text-cyber-green-300">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((prediction) => (
              <tr key={prediction.id} className="border-b border-cyber-green-900">
                <td className="px-2 py-1 text-cyber-green-400">{prediction.candidate}</td>
                <td className="px-2 py-1 text-cyber-green-400">{prediction.probability.toFixed(2)}</td>
                <td className="px-2 py-1 text-cyber-green-400">{new Date(prediction.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PredictionList;
