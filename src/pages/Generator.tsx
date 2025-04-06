
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

// Import our new components
import SetupForm from '@/components/generator/SetupForm';
import ProgressDisplay from '@/components/generator/ProgressDisplay';
import ConflictsSection from '@/components/generator/ConflictsSection';
import CompletionSection from '@/components/generator/CompletionSection';
import AdvancedOptions from '@/components/generator/AdvancedOptions';

const Generator = () => {
  const navigate = useNavigate();
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
    toast.info("Starting timetable generation...");
    
    // Simulate the generation process with a progress bar
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsGenerating(false);
        setStep("conflicts");
        toast.warning("Conflicts detected in the generated timetable");
      }
    }, 500);
  };

  const resolveConflicts = () => {
    // Simulate resolving conflicts
    setStep("finalizing");
    setProgress(0);
    toast.info("Attempting to resolve conflicts automatically...");
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setStep("completed");
        toast.success("Timetable generated successfully!");
      }
    }, 400);
  };

  const handleCancel = () => {
    setStep("setup");
    setProgress(0);
    setIsGenerating(false);
    toast.info("Generation process cancelled");
  };

  const handleReviewManually = () => {
    toast.info("Opening manual conflict review...");
    // Implement review functionality here
    // This would typically navigate to a detailed conflicts page
  };

  const handleGenerateAnother = () => {
    setStep("setup");
    setProgress(0);
    setIsGenerating(false);
    toast.info("Ready to generate a new timetable");
  };

  const handleViewTimetable = () => {
    toast.success("Navigating to timetable view");
    navigate("/timetables");
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
                <ProgressDisplay 
                  step={step} 
                  progress={progress} 
                  onCancel={handleCancel}
                />
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
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </>
              )}
              
              {step === "conflicts" && (
                <>
                  <Button variant="outline" onClick={handleReviewManually}>Review Manually</Button>
                  <Button onClick={resolveConflicts}>
                    Auto Resolve Conflicts
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </>
              )}
              
              {step === "completed" && (
                <>
                  <Button variant="outline" onClick={handleGenerateAnother}>Generate Another</Button>
                  <Button onClick={handleViewTimetable}>
                    View Timetable
                    <ArrowRight className="h-4 w-4 ml-2" />
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
