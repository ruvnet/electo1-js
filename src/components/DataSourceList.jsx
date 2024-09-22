import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DataSourceList = () => {
  const dataSources = [
    { name: 'Election API', type: 'API', status: 'Active', lastUpdated: '2023-03-15 14:30' },
    { name: 'News Scraper', type: 'Web Scraping', status: 'Active', lastUpdated: '2023-03-15 15:45' },
    { name: 'Social Media Feed', type: 'RSS', status: 'Inactive', lastUpdated: '2023-03-14 09:00' },
    { name: 'Sentiment Analyzer', type: 'AI Processing', status: 'Active', lastUpdated: '2023-03-15 16:20' },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-cyber-green-400">Name</TableHead>
          <TableHead className="text-cyber-green-400">Type</TableHead>
          <TableHead className="text-cyber-green-400">Status</TableHead>
          <TableHead className="text-cyber-green-400">Last Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSources.map((source, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-cyber-green-400">{source.name}</TableCell>
            <TableCell className="text-cyber-green-400">{source.type}</TableCell>
            <TableCell>
              <Badge variant={source.status === 'Active' ? 'default' : 'secondary'}>
                {source.status}
              </Badge>
            </TableCell>
            <TableCell className="text-cyber-green-400">{source.lastUpdated}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataSourceList;