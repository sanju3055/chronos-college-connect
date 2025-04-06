
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock teacher data
const teachers = [
  { 
    id: 1, 
    name: 'Dr. John Smith', 
    department: 'Computer Science',
    designation: 'Professor',
    courses: ['Introduction to Computer Science', 'Advanced Algorithms'],
    availability: 'Full-time',
    specialization: 'Algorithms',
    email: 'john.smith@college.edu'
  },
  { 
    id: 2, 
    name: 'Dr. Emily Williams', 
    department: 'Computer Science',
    designation: 'Associate Professor',
    courses: ['Database Systems', 'Data Mining'],
    availability: 'Full-time',
    specialization: 'Database Systems',
    email: 'emily.williams@college.edu'
  },
  { 
    id: 3, 
    name: 'Prof. David Johnson', 
    department: 'Mechanical Engineering',
    designation: 'Professor',
    courses: ['Introduction to Mechanical Engineering', 'Thermodynamics'],
    availability: 'Full-time',
    specialization: 'Thermal Sciences',
    email: 'david.johnson@college.edu'
  },
  { 
    id: 4, 
    name: 'Dr. Sarah Miller', 
    department: 'Electrical Engineering',
    designation: 'Professor',
    courses: ['Circuit Theory', 'Digital Electronics'],
    availability: 'Part-time',
    specialization: 'Digital Systems',
    email: 'sarah.miller@college.edu'
  },
  { 
    id: 5, 
    name: 'Prof. Robert Wilson', 
    department: 'Civil Engineering',
    designation: 'Associate Professor',
    courses: ['Engineering Mechanics', 'Structural Analysis'],
    availability: 'Full-time',
    specialization: 'Structural Engineering',
    email: 'robert.wilson@college.edu'
  },
];

const Teachers = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teachers</h1>
          <p className="text-muted-foreground">Manage faculty members and their schedules</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Teacher
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Teacher Management</CardTitle>
          <CardDescription>
            Add, edit, and manage faculty members for scheduling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search teachers..."
              className="w-full pl-8"
            />
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Designation</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Availability</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teachers.map((teacher) => (
                  <TableRow key={teacher.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{teacher.name}</div>
                          <div className="text-xs text-muted-foreground">{teacher.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{teacher.department}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {teacher.designation}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {teacher.courses.map((course, idx) => (
                          <Badge key={idx} variant="outline">{course}</Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={teacher.availability === 'Full-time' ? 'default' : 'secondary'}>
                        {teacher.availability}
                      </Badge>
                    </TableCell>
                    <TableCell className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">View Schedule</Button>
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

export default Teachers;
