
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Mock course data
const courses = [
  { 
    id: 'CS101', 
    name: 'Introduction to Computer Science', 
    department: 'Computer Science',
    credits: 3,
    hoursPerWeek: 4,
    teacher: 'Dr. Smith',
    type: 'Lecture'
  },
  { 
    id: 'CS201', 
    name: 'Data Structures', 
    department: 'Computer Science',
    credits: 4,
    hoursPerWeek: 5,
    teacher: 'Prof. Moore',
    type: 'Lecture + Lab'
  },
  { 
    id: 'CS301', 
    name: 'Database Systems', 
    department: 'Computer Science',
    credits: 3,
    hoursPerWeek: 4,
    teacher: 'Dr. Williams',
    type: 'Lecture'
  },
  { 
    id: 'CS302', 
    name: 'Operating Systems', 
    department: 'Computer Science',
    credits: 4,
    hoursPerWeek: 5,
    teacher: 'Dr. Taylor',
    type: 'Lecture + Lab'
  },
  { 
    id: 'ME101', 
    name: 'Introduction to Mechanical Engineering', 
    department: 'Mechanical Engineering',
    credits: 3,
    hoursPerWeek: 4,
    teacher: 'Prof. Johnson',
    type: 'Lecture'
  },
  { 
    id: 'EE101', 
    name: 'Circuit Theory', 
    department: 'Electrical Engineering',
    credits: 4,
    hoursPerWeek: 5,
    teacher: 'Dr. Miller',
    type: 'Lecture + Lab'
  },
  { 
    id: 'CE101', 
    name: 'Engineering Mechanics', 
    department: 'Civil Engineering',
    credits: 3,
    hoursPerWeek: 4,
    teacher: 'Prof. Wilson',
    type: 'Lecture'
  },
];

const Courses = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Manage courses and their requirements</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Course
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Management</CardTitle>
          <CardDescription>
            Add, edit, and manage courses for scheduling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pl-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="me">Mechanical Engineering</SelectItem>
                <SelectItem value="ee">Electrical Engineering</SelectItem>
                <SelectItem value="ce">Civil Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Code</TableHead>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Hours/Week</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.id}</TableCell>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.department}</TableCell>
                    <TableCell>{course.credits}</TableCell>
                    <TableCell>{course.hoursPerWeek}</TableCell>
                    <TableCell>{course.teacher}</TableCell>
                    <TableCell>{course.type}</TableCell>
                    <TableCell className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Courses;
