
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, BookOpen, LayoutGrid, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, description, value, icon: Icon, linkTo }: {
  title: string;
  description: string;
  value: number | string;
  icon: React.ElementType;
  linkTo: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground pt-1">{description}</p>
      <Button asChild variant="ghost" size="sm" className="mt-4 px-0">
        <Link to={linkTo}>View {title}</Link>
      </Button>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  // In a real app, these would be fetched from an API
  const dashboardData = {
    activeTimetables: 3,
    totalCourses: 24,
    totalTeachers: 15,
    totalClassrooms: 12,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Chronos Timetable Generator</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard 
          title="Timetables" 
          description="Active timetable schedules" 
          value={dashboardData.activeTimetables}
          icon={Calendar}
          linkTo="/timetables"
        />
        <DashboardCard 
          title="Courses" 
          description="Total courses in the system" 
          value={dashboardData.totalCourses}
          icon={BookOpen}
          linkTo="/courses"
        />
        <DashboardCard 
          title="Teachers" 
          description="Faculty members registered" 
          value={dashboardData.totalTeachers}
          icon={Users}
          linkTo="/teachers"
        />
        <DashboardCard 
          title="Classrooms" 
          description="Available rooms for scheduling" 
          value={dashboardData.totalClassrooms}
          icon={LayoutGrid}
          linkTo="/classrooms"
        />
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Quick Generate Timetable
          </CardTitle>
          <CardDescription>
            Create a new optimized timetable based on available resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link to="/generator">Launch Generator</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
