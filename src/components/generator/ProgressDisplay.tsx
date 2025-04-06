
import React from 'react';
import { Clock, XCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface ProgressDisplayProps {
  step: string;
  progress: number;
  onCancel?: () => void;
}

const ProgressDisplay = ({ step, progress, onCancel }: ProgressDisplayProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
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
        
        {onCancel && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onCancel}
            className="text-muted-foreground hover:text-destructive"
          >
            <XCircle className="h-5 w-5" />
            <span className="sr-only">Cancel</span>
          </Button>
        )}
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
