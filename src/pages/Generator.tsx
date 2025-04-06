import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, AlertTriangle, ArrowRight, Settings } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

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
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="department" className="text-sm font-medium">Department</label>
                      <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="me">Mechanical Engineering</SelectItem>
                          <SelectItem value="ee">Electrical Engineering</SelectItem>
                          <SelectItem value="ce">Civil Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="semester" className="text-sm font-medium">Semester</label>
                      <Select defaultValue="fall2024">
                        <SelectTrigger>
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fall2024">Fall 2024</SelectItem>
                          <SelectItem value="spring2025">Spring 2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="year" className="text-sm font-medium">Year</label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Years</SelectItem>
                          <SelectItem value="1">First Year</SelectItem>
                          <SelectItem value="2">Second Year</SelectItem>
                          <SelectItem value="3">Third Year</SelectItem>
                          <SelectItem value="4">Fourth Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="section" className="text-sm font-medium">Section</label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select section" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sections</SelectItem>
                          <SelectItem value="a">Section A</SelectItem>
                          <SelectItem value="b">Section B</SelectItem>
                          <SelectItem value="c">Section C</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Optimization Preferences</h3>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="minGaps" defaultChecked />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="minGaps" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Minimize gaps between classes
                          </label>
                          <p className="text-sm text-muted-foreground">
                            Ensures compact schedules with minimal free periods
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox id="balancedDays" defaultChecked />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="balancedDays" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Balance workload across days
                          </label>
                          <p className="text-sm text-muted-foreground">
                            Distributes classes evenly throughout the week
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox id="teacherPref" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="teacherPref" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Prioritize teacher preferences
                          </label>
                          <p className="text-sm text-muted-foreground">
                            Accommodates teacher schedule preferences when possible
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox id="lunchBreak" defaultChecked />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="lunchBreak" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Include lunch break
                          </label>
                          <p className="text-sm text-muted-foreground">
                            Ensures a dedicated lunch period in the schedule
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {(step === "generating" || step === "finalizing") && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-primary animate-pulse" />
                    <div className="space-y-1">
                      <p className="font-medium">
                        {step === "generating" ? "Generating Timetable" : "Finalizing Timetable"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {step === "generating" ? "Please wait while we generate an optimized timetable" : "Resolving conflicts and optimizing the schedule"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Processing...</span>
                      <span>{progress}%</span>
                    </div>
                  </div>
                </div>
              )}
              
              {step === "conflicts" && (
                <div className="space-y-6">
                  <Alert className="bg-amber-50 border-amber-500">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800">
                      Some conflicts were detected in the generated timetable.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Detected Conflicts</h3>
                      <Card>
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium">Teacher Scheduling Conflicts</h4>
                                <p className="text-sm text-muted-foreground">Teachers assigned to multiple classes at the same time</p>
                              </div>
                              <Badge>{conflicts.teacherConflicts}</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium">Room Booking Conflicts</h4>
                                <p className="text-sm text-muted-foreground">Multiple classes scheduled in the same room</p>
                              </div>
                              <Badge>{conflicts.roomConflicts}</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
              
              {step === "completed" && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-lg">Timetable Generated Successfully!</p>
                      <p className="text-muted-foreground">
                        An optimized timetable has been created and is ready to view
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <div className="font-medium">Department:</div>
                        <div>Computer Science</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">Year/Semester:</div>
                        <div>All Years / Fall 2024</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">Generated On:</div>
                        <div>{new Date().toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {step === "setup" && (
                <>
                  <Button variant="outline">Cancel</Button>
                  <Button onClick={handleGenerate}>
                    Generate Timetable
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
              
              {step === "conflicts" && (
                <>
                  <Button variant="outline">Review Manually</Button>
                  <Button onClick={resolveConflicts}>
                    Auto Resolve Conflicts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
              
              {step === "completed" && (
                <>
                  <Button variant="outline">Generate Another</Button>
                  <Button>
                    View Timetable
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <CardTitle>Advanced Generation Options</CardTitle>
              </div>
              <CardDescription>
                Fine-tune the timetable generation algorithm with advanced constraints and rules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">Configure advanced settings for more specific timetable requirements.</p>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Algorithm Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>Advanced algorithm configuration options will appear here.</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Custom Constraints</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>Define custom constraints for special scheduling rules.</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Generator;
