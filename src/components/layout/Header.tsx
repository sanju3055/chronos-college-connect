
import React from 'react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Menu, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b bg-card px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <SidebarTrigger>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SidebarTrigger>
        <h1 className="text-xl font-bold">Chronos</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">User profile</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
