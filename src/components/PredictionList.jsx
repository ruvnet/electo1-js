import React from 'react';

const predictions = [
  { id: 1, candidate: 'Candidate A', probability: 0.65, timestamp: '2023-10-01T12:00:00Z' },
  { id: 2, candidate: 'Candidate B', probability: 0.35, timestamp: '2023-10-01T12:05:00Z' },
];

const PredictionList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Predictions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Candidate</th>
              <th className="px-4 py-2 text-left">Probability</th>
              <th className="px-4 py-2 text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((prediction) => (
              <tr key={prediction.id}>
                <td className="border px-4 py-2">{prediction.candidate}</td>
                <td className="border px-4 py-2">{prediction.probability.toFixed(2)}</td>
                <td className="border px-4 py-2">{new Date(prediction.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PredictionList;