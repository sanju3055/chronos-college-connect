
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ConflictsSectionProps {
  conflicts: {
    teacherConflicts: number;
    roomConflicts: number;
  };
}

const ConflictsSection = ({ conflicts }: ConflictsSectionProps) => {
  return (
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
  );
};

export default ConflictsSection;
