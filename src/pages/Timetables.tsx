
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Plus, RefreshCw } from 'lucide-react';

// Mock timetable data
const mockTimeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const mockDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const mockTimetableData = [
  {
    time: '9:00 AM',
    Monday: { course: 'Introduction to Computer Science', teacher: 'Dr. Smith', room: 'Room 101' },
    Tuesday: { course: 'Advanced Algorithms', teacher: 'Prof. Johnson', room: 'Lab 3' },
    Wednesday: { course: 'Database Systems', teacher: 'Dr. Williams', room: 'Room 102' },
    Thursday: { course: '', teacher: '', room: '' },
    Friday: { course: 'Web Development', teacher: 'Prof. Davis', room: 'Lab 1' },
  },
  {
    time: '10:00 AM',
    Monday: { course: 'Mathematics', teacher: 'Dr. Brown', room: 'Room 201' },
    Tuesday: { course: '', teacher: '', room: '' },
    Wednesday: { course: 'Statistics', teacher: 'Dr. Miller', room: 'Room 202' },
    Thursday: { course: 'Artificial Intelligence', teacher: 'Prof. Wilson', room: 'Lab 2' },
    Friday: { course: '', teacher: '', room: '' },
  },
  {
    time: '11:00 AM',
    Monday: { course: '', teacher: '', room: '' },
    Tuesday: { course: 'Operating Systems', teacher: 'Dr. Taylor', room: 'Room 103' },
    Wednesday: { course: '', teacher: '', room: '' },
    Thursday: { course: 'Computer Networks', teacher: 'Prof. Anderson', room: 'Room 104' },
    Friday: { course: 'Software Engineering', teacher: 'Dr. Thomas', room: 'Lab 4' },
  },
  {
    time: '12:00 PM',
    Monday: { course: 'Lunch Break', teacher: '', room: '' },
    Tuesday: { course: 'Lunch Break', teacher: '', room: '' },
    Wednesday: { course: 'Lunch Break', teacher: '', room: '' },
    Thursday: { course: 'Lunch Break', teacher: '', room: '' },
    Friday: { course: 'Lunch Break', teacher: '', room: '' },
  },
  {
    time: '1:00 PM',
    Monday: { course: 'Data Structures', teacher: 'Prof. Moore', room: 'Room 105' },
    Tuesday: { course: 'Mobile App Development', teacher: 'Dr. Jackson', room: 'Lab 1' },
    Wednesday: { course: 'Machine Learning', teacher: 'Prof. White', room: 'Room 203' },
    Thursday: { course: '', teacher: '', room: '' },
    Friday: { course: 'Computer Graphics', teacher: 'Dr. Harris', room: 'Lab 3' },
  },
  {
    time: '2:00 PM',
    Monday: { course: 'Cybersecurity', teacher: 'Prof. Martin', room: 'Room 106' },
    Tuesday: { course: '', teacher: '', room: '' },
    Wednesday: { course: 'Cloud Computing', teacher: 'Dr. Thompson', room: 'Lab 2' },
    Thursday: { course: 'Embedded Systems', teacher: 'Prof. Garcia', room: 'Room 107' },
    Friday: { course: '', teacher: '', room: '' },
  },
];

const Timetables = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Timetables</h1>
          <p className="text-muted-foreground">View and manage class schedules</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Timetable
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">View:</span>
          <Select defaultValue="class">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="class">Class View</SelectItem>
              <SelectItem value="teacher">Teacher View</SelectItem>
              <SelectItem value="room">Room View</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Semester:</span>
          <Select defaultValue="current">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current (Fall 2024)</SelectItem>
              <SelectItem value="next">Spring 2025</SelectItem>
              <SelectItem value="previous">Summer 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="cse" className="w-full">
        <TabsList>
          <TabsTrigger value="cse">Computer Science</TabsTrigger>
          <TabsTrigger value="mech">Mechanical Eng.</TabsTrigger>
          <TabsTrigger value="elec">Electrical Eng.</TabsTrigger>
          <TabsTrigger value="civil">Civil Eng.</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cse" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Computer Science - Third Year (Section A)</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Export
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" /> Regenerate
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="timetable-grid">
                <div className="timetable-header">Time</div>
                {mockDays.map((day) => (
                  <div key={day} className="timetable-header">{day}</div>
                ))}
                
                {mockTimetableData.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    <div className="timetable-time">{row.time}</div>
                    {mockDays.map((day) => {
                      const cellData = row[day as keyof typeof row] as any;
                      return (
                        <div key={day} className={cellData.course ? "timetable-cell-course" : "timetable-cell"}>
                          {cellData.course && (
                            <>
                              <div className="font-medium">{cellData.course}</div>
                              {cellData.teacher && <div className="text-xs text-muted-foreground">{cellData.teacher}</div>}
                              {cellData.room && <div className="text-xs">{cellData.room}</div>}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mech" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Mechanical Engineering Timetable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select this tab to view Mechanical Engineering timetables.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="elec" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Electrical Engineering Timetable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select this tab to view Electrical Engineering timetables.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="civil" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Civil Engineering Timetable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select this tab to view Civil Engineering timetables.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Timetables;
