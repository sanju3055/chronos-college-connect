
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Mock classroom data
const classrooms = [
  { 
    id: 'Room 101', 
    type: 'Lecture Hall',
    capacity: 120,
    building: 'Main Building',
    floor: '1st Floor',
    facilities: ['Projector', 'AC', 'Smart Board'],
    utilization: 85,
    availability: 'Available'
  },
  { 
    id: 'Room 102', 
    type: 'Classroom',
    capacity: 60,
    building: 'Main Building',
    floor: '1st Floor',
    facilities: ['Projector', 'AC'],
    utilization: 70,
    availability: 'Available'
  },
  { 
    id: 'Lab 1', 
    type: 'Computer Lab',
    capacity: 40,
    building: 'Technology Building',
    floor: 'Ground Floor',
    facilities: ['Computers', 'Projector', 'AC', 'Smart Board'],
    utilization: 90,
    availability: 'Available'
  },
  { 
    id: 'Lab 2', 
    type: 'Computer Lab',
    capacity: 40,
    building: 'Technology Building',
    floor: 'Ground Floor',
    facilities: ['Computers', 'Projector', 'AC'],
    utilization: 80,
    availability: 'Under Maintenance'
  },
  { 
    id: 'Room 201', 
    type: 'Classroom',
    capacity: 80,
    building: 'Main Building',
    floor: '2nd Floor',
    facilities: ['Projector', 'AC'],
    utilization: 75,
    availability: 'Available'
  },
  { 
    id: 'Lab 3', 
    type: 'Electronics Lab',
    capacity: 30,
    building: 'Technology Building',
    floor: '1st Floor',
    facilities: ['Equipment', 'AC'],
    utilization: 65,
    availability: 'Available'
  },
];

const Classrooms = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Classrooms</h1>
          <p className="text-muted-foreground">Manage classroom availability and schedules</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Classroom
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Classroom Management</CardTitle>
          <CardDescription>
            Add, edit, and manage classrooms for scheduling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search classrooms..."
                className="w-full pl-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="lecture">Lecture Halls</SelectItem>
                <SelectItem value="classroom">Classrooms</SelectItem>
                <SelectItem value="lab">Labs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Room ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Building</TableHead>
                  <TableHead>Facilities</TableHead>
                  <TableHead>Utilization</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classrooms.map((classroom) => (
                  <TableRow key={classroom.id}>
                    <TableCell className="font-medium">{classroom.id}</TableCell>
                    <TableCell>{classroom.type}</TableCell>
                    <TableCell>{classroom.capacity} seats</TableCell>
                    <TableCell>
                      <div>
                        {classroom.building}
                        <div className="text-xs text-muted-foreground">{classroom.floor}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {classroom.facilities.map((facility, idx) => (
                          <Badge key={idx} variant="outline">{facility}</Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="w-full space-y-1">
                        <Progress value={classroom.utilization} className="h-2" />
                        <div className="text-xs text-right">{classroom.utilization}%</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={classroom.availability === 'Available' ? 'default' : 'secondary'}
                        className={classroom.availability === 'Under Maintenance' ? 'bg-amber-500' : ''}
                      >
                        {classroom.availability}
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

export default Classrooms;
