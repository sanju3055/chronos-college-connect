
import React from 'react';
import { Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ProgressDisplayProps {
  step: string;
  progress: number;
}

const ProgressDisplay = ({ step, progress }: ProgressDisplayProps) => {
  return (
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
  );
};

export default ProgressDisplay;
