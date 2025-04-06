
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface SetupFormProps {
  selectedDepartment: string;
  setSelectedDepartment: (value: string) => void;
}

const SetupForm = ({ selectedDepartment, setSelectedDepartment }: SetupFormProps) => {
  return (
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
  );
};

export default SetupForm;
