
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, ArrowRight } from 'lucide-react';

// Import our new components
import SetupForm from '@/components/generator/SetupForm';
import ProgressDisplay from '@/components/generator/ProgressDisplay';
import ConflictsSection from '@/components/generator/ConflictsSection';
import CompletionSection from '@/components/generator/CompletionSection';
import AdvancedOptions from '@/components/generator/AdvancedOptions';

const Generator = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("cs");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [step, setStep] = useState<string>("setup");
  const [conflicts, setConflicts] = useState<{
    teacherConflicts: number,
    roomConflicts: number
  }>({ teacherConflicts: 2, roomConflicts: 1 });

  const handleGenerate = () => {
    setIsGenerating(true);
    setStep("generating");
    
    // Simulate the generation process with a progress bar
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsGenerating(false);
        setStep("conflicts");
      }
    }, 500);
  };

  const resolveConflicts = () => {
    // Simulate resolving conflicts
    setStep("finalizing");
    setProgress(0);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setStep("completed");
      }
    }, 400);
  };

  const handleCancel = () => {
    setStep("setup");
    setProgress(0);
    setIsGenerating(false);
  };

  const handleReviewManually = () => {
    console.log("Reviewing conflicts manually");
    // Implement review functionality here
  };

  const handleGenerateAnother = () => {
    setStep("setup");
    setProgress(0);
    setIsGenerating(false);
  };

  const handleViewTimetable = () => {
    console.log("Viewing generated timetable");
    // Implement navigation to timetable view
    window.location.href = "/timetables";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Timetable Generator</h1>
        <p className="text-muted-foreground">Create optimized timetables based on available resources</p>
      </div>

      <Tabs defaultValue="standard" className="w-full">
        <TabsList>
          <TabsTrigger value="standard">Standard Generation</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
        </TabsList>
        
        <TabsContent value="standard" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle>Quick Timetable Generation</CardTitle>
              </div>
              <CardDescription>
                Generate an optimized timetable based on courses, teachers, and classroom availability
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === "setup" && (
                <SetupForm 
                  selectedDepartment={selectedDepartment} 
                  setSelectedDepartment={setSelectedDepartment} 
                />
              )}
              
              {(step === "generating" || step === "finalizing") && (
                <ProgressDisplay step={step} progress={progress} />
              )}
              
              {step === "conflicts" && (
                <ConflictsSection conflicts={conflicts} />
              )}
              
              {step === "completed" && (
                <CompletionSection />
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {step === "setup" && (
                <>
                  <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                  <Button onClick={handleGenerate}>
                    Generate Timetable
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
              
              {step === "conflicts" && (
                <>
                  <Button variant="outline" onClick={handleReviewManually}>Review Manually</Button>
                  <Button onClick={resolveConflicts}>
                    Auto Resolve Conflicts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
              
              {step === "completed" && (
                <>
                  <Button variant="outline" onClick={handleGenerateAnother}>Generate Another</Button>
                  <Button onClick={handleViewTimetable}>
                    View Timetable
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-6 space-y-6">
          <AdvancedOptions />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Generator;
