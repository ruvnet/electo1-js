import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import PredictionChart from './PredictionChart';
import { Progress } from "@/components/ui/progress";

const PredictionModal = ({ isOpen, onClose, params }) => {
  const mockPredictionData = {
    mainCandidate: { name: "Candidate A", probability: 0.65 },
    otherCandidates: [
      { name: "Candidate B", probability: 0.25 },
      { name: "Candidate C", probability: 0.10 },
    ],
    voterTurnout: 0.72,
    confidenceInterval: [0.61, 0.69],
    keyFactors: [
      { name: "Economic Growth", impact: 0.8 },
      { name: "Approval Rating", impact: 0.7 },
      { name: "Campaign Spending", impact: 0.6 },
    ],
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-cyber-black border-cyber-green-700 text-cyber-green-400 w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] h-[90vh] max-h-[90vh] p-0">
        <DialogHeader className="p-6">
          <DialogTitle className="text-cyber-green-400 text-xl font-mono">Detailed Prediction Analysis</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full px-6 pb-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-cyber-green-900 mb-4">
              <TabsTrigger value="overview" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">Overview</TabsTrigger>
              <TabsTrigger value="factors" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">Key Factors</TabsTrigger>
              <TabsTrigger value="scenarios" className="text-cyber-green-400 data-[state=active]:bg-cyber-green-700">Scenarios</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-cyber-black border-cyber-green-700">
                  <CardHeader>
                    <CardTitle className="text-cyber-green-400 text-sm font-mono">Win Probability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono">{mockPredictionData.mainCandidate.name}</span>
                        <span className="text-xs font-mono">{(mockPredictionData.mainCandidate.probability * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={mockPredictionData.mainCandidate.probability * 100} className="bg-cyber-green-900" />
                      {mockPredictionData.otherCandidates.map((candidate, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-mono">{candidate.name}</span>
                            <span className="text-xs font-mono">{(candidate.probability * 100).toFixed(1)}%</span>
                          </div>
                          <Progress value={candidate.probability * 100} className="bg-cyber-green-900" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-cyber-black border-cyber-green-700">
                  <CardHeader>
                    <CardTitle className="text-cyber-green-400 text-sm font-mono">Prediction Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PredictionChart />
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-cyber-black border-cyber-green-700 mt-4">
                <CardHeader>
                  <CardTitle className="text-cyber-green-400 text-sm font-mono">Additional Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-mono mb-1">Predicted Voter Turnout</p>
                      <p className="text-lg font-mono">{(mockPredictionData.voterTurnout * 100).toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono mb-1">Confidence Interval</p>
                      <p className="text-lg font-mono">{mockPredictionData.confidenceInterval[0] * 100}% - {mockPredictionData.confidenceInterval[1] * 100}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="factors">
              <Card className="bg-cyber-black border-cyber-green-700">
                <CardHeader>
                  <CardTitle className="text-cyber-green-400 text-sm font-mono">Key Influencing Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockPredictionData.keyFactors.map((factor, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-mono">{factor.name}</span>
                          <span className="text-xs font-mono">Impact: {factor.impact.toFixed(2)}</span>
                        </div>
                        <Progress value={factor.impact * 100} className="bg-cyber-green-900" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="scenarios">
              <Card className="bg-cyber-black border-cyber-green-700">
                <CardHeader>
                  <CardTitle className="text-cyber-green-400 text-sm font-mono">Alternative Scenarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-mono mb-2">Scenario 1: Economic Downturn</p>
                      <Progress value={55} className="bg-cyber-green-900" />
                      <p className="text-xs font-mono mt-1">Main candidate win probability: 55%</p>
                    </div>
                    <div>
                      <p className="text-sm font-mono mb-2">Scenario 2: Major Policy Change</p>
                      <Progress value={70} className="bg-cyber-green-900" />
                      <p className="text-xs font-mono mt-1">Main candidate win probability: 70%</p>
                    </div>
                    <div>
                      <p className="text-sm font-mono mb-2">Scenario 3: Increased Voter Turnout</p>
                      <Progress value={62} className="bg-cyber-green-900" />
                      <p className="text-xs font-mono mt-1">Main candidate win probability: 62%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PredictionModal;
