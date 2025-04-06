
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Calendar, Clock, Home, BookOpen, Users, LayoutGrid, Settings } from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: Home,
  },
  {
    title: 'Timetables',
    path: '/timetables',
    icon: Calendar,
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: BookOpen,
  },
  {
    title: 'Teachers',
    path: '/teachers',
    icon: Users,
  },
  {
    title: 'Classrooms',
    path: '/classrooms',
    icon: LayoutGrid,
  },
  {
    title: 'Generator',
    path: '/generator',
    icon: Clock,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: Settings,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarComponent>
      <SidebarContent>
        <div className="p-6">
          <h1 className="text-xl font-bold text-sidebar-foreground">Chronos</h1>
          <p className="text-sm text-sidebar-foreground/60">College Timetable Generator</p>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path} className={isActive(item.path) ? "bg-sidebar-accent" : ""}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;
