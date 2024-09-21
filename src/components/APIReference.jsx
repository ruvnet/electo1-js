import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const APIReference = () => {
  const endpoints = [
    {
      name: "Create Prediction",
      method: "POST",
      path: "/predictions/",
      description: "Creates a new prediction.",
      requestParams: [
        { name: "candidate", type: "string", description: "The name of the candidate." },
        { name: "probability", type: "float", description: "The probability of the candidate winning." }
      ],
      exampleRequest: `{
  "candidate": "Test Candidate",
  "probability": 0.75
}`,
      exampleResponse: `{
  "id": 1,
  "candidate": "Test Candidate",
  "probability": 0.75,
  "timestamp": "2023-10-01T12:00:00Z"
}`
    },
    {
      name: "Read Predictions",
      method: "GET",
      path: "/predictions/",
      description: "Retrieves a list of all predictions.",
      requestParams: [
        { name: "skip", type: "integer", description: "Number of records to skip (optional)." },
        { name: "limit", type: "integer", description: "Maximum number of records to return (optional)." }
      ],
      exampleRequest: "GET /predictions/?skip=0&limit=10",
      exampleResponse: `[
  {
    "id": 1,
    "candidate": "Test Candidate",
    "probability": 0.75,
    "timestamp": "2023-10-01T12:00:00Z"
  },
  {
    "id": 2,
    "candidate": "Another Candidate",
    "probability": 0.65,
    "timestamp": "2023-10-01T12:05:00Z"
  }
]`
    },
    {
      name: "Read Prediction",
      method: "GET",
      path: "/predictions/{id}",
      description: "Retrieves a specific prediction by its ID.",
      requestParams: [
        { name: "id", type: "integer", description: "The ID of the prediction." }
      ],
      exampleRequest: "GET /predictions/1",
      exampleResponse: `{
  "id": 1,
  "candidate": "Test Candidate",
  "probability": 0.75,
  "timestamp": "2023-10-01T12:00:00Z"
}`
    },
    {
      name: "Update Prediction",
      method: "PUT",
      path: "/predictions/{id}",
      description: "Updates an existing prediction.",
      requestParams: [
        { name: "id", type: "integer", description: "The ID of the prediction." },
        { name: "candidate", type: "string", description: "The updated name of the candidate." },
        { name: "probability", type: "float", description: "The updated probability of the candidate winning." }
      ],
      exampleRequest: `{
  "candidate": "Updated Candidate",
  "probability": 0.8
}`,
      exampleResponse: `{
  "id": 1,
  "candidate": "Updated Candidate",
  "probability": 0.8,
  "timestamp": "2023-10-01T12:00:00Z"
}`
    },
    {
      name: "Delete Prediction",
      method: "DELETE",
      path: "/predictions/{id}",
      description: "Deletes a specific prediction by its ID.",
      requestParams: [
        { name: "id", type: "integer", description: "The ID of the prediction." }
      ],
      exampleRequest: "DELETE /predictions/1",
      exampleResponse: `{
  "id": 1,
  "candidate": "Test Candidate",
  "probability": 0.75,
  "timestamp": "2023-10-01T12:00:00Z"
}`
    },
    {
      name: "Get System Status",
      method: "GET",
      path: "/status/",
      description: "Retrieves the current status of the system.",
      requestParams: [],
      exampleRequest: "GET /status/",
      exampleResponse: `{
  "status": "ok",
  "uptime": "24 hours"
}`
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">API Reference</h1>
      <p className="mb-4">This document provides detailed information about the API endpoints available in the Agentic Election Prediction System.</p>
      
      <Accordion type="single" collapsible className="w-full">
        {endpoints.map((endpoint, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              <span className="font-semibold">{endpoint.name}</span>
              <span className="ml-2 text-sm text-gray-500">{endpoint.method} {endpoint.path}</span>
            </AccordionTrigger>
            <AccordionContent>
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
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default APIReference;