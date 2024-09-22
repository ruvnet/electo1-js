import { useQuery } from '@tanstack/react-query';

const fetchElectionData = async (filter) => {
  // This is a mock function. In a real application, you would fetch data from an API
  // based on the filter parameters.
  const mockData = [
    { id: '12001', value: 80, name: 'Alachua County' },
    { id: '12086', value: 60, name: 'Miami-Dade County' },
    { id: '12031', value: 75, name: 'Duval County' },
    { id: '12095', value: 55, name: 'Orange County' },
    { id: '12057', value: 70, name: 'Hillsborough County' },
    // Add more mock data for other Florida counties as needed
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
