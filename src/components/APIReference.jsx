import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { apiEndpoints, algorithms } from '../data/apiData';

const APIReference = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">API Reference and Algorithms</h1>
      <p className="mb-4">This document provides detailed information about the API endpoints and algorithms used in the Agentic Election Prediction System.</p>
      
      <Accordion type="single" collapsible className="w-full mb-8">
        <AccordionItem value="api-endpoints">
          <AccordionTrigger>API Endpoints</AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              {apiEndpoints.map((endpoint, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>
                    <span className="font-semibold">{endpoint.name}</span>
                    <span className="ml-2 text-sm text-gray-500">{endpoint.method} {endpoint.path}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <EndpointCard endpoint={endpoint} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="algorithms">
          <AccordionTrigger>Algorithms</AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              {algorithms.map((algorithm, index) => (
                <AccordionItem value={`algo-${index}`} key={index}>
                  <AccordionTrigger>
                    <span className="font-semibold">{algorithm.name}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <AlgorithmCard algorithm={algorithm} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const EndpointCard = ({ endpoint }) => (
  <Card>
    <CardHeader>
      <CardTitle>{endpoint.name}</CardTitle>
      <CardDescription>{endpoint.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <h4 className="font-semibold mb-2">Request Parameters:</h4>
      <ul className="list-disc pl-5 mb-4">
        {endpoint.requestParams.map((param, paramIndex) => (
          <li key={paramIndex}>
            <strong>{param.name}</strong> ({param.type}): {param.description}
          </li>
        ))}
      </ul>
      <h4 className="font-semibold mb-2">Example Request:</h4>
      <pre className="bg-gray-100 p-2 rounded mb-4">{endpoint.exampleRequest}</pre>
      <h4 className="font-semibold mb-2">Example Response:</h4>
      <pre className="bg-gray-100 p-2 rounded">{endpoint.exampleResponse}</pre>
    </CardContent>
  </Card>
);

const AlgorithmCard = ({ algorithm }) => (
  <Card>
    <CardHeader>
      <CardTitle>{algorithm.name}</CardTitle>
      <CardDescription>{algorithm.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <h4 className="font-semibold mb-2">Code:</h4>
      <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
        <code>{algorithm.code}</code>
      </pre>
    </CardContent>
  </Card>
);

export default APIReference;
