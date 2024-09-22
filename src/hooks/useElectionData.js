import { useQuery } from '@tanstack/react-query';

const fetchElectionData = async (filter) => {
  // This is a mock function. In a real application, you would fetch data from an API
  // based on the filter parameters.
  const mockData = [
    { id: 'CA', value: 80 },
    { id: 'TX', value: 60 },
    { id: 'NY', value: 75 },
    // Add more mock data for other states
  ];

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return mockData;
};

export const useElectionData = (filter) => {
  return useQuery({
    queryKey: ['electionData', filter],
    queryFn: () => fetchElectionData(filter),
  });
};