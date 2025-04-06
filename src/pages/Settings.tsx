
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your application preferences and configuration</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="timetable">Timetable</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="backup">Backup & Export</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure your institution and application preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Institution Details</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="institutionName">Institution Name</Label>
                    <Input id="institutionName" placeholder="Enter institution name" defaultValue="Chronos College" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="academicYear">Current Academic Year</Label>
                    <Input id="academicYear" placeholder="e.g., 2024-2025" defaultValue="2024-2025" />
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="timeFormat">Time Format</Label>
                    <Select defaultValue="12h">
                      <SelectTrigger>
                        <SelectValue placeholder="Select time format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                        <SelectItem value="24h">24-hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstDayOfWeek">First Day of Week</Label>
                    <Select defaultValue="monday">
                      <SelectTrigger>
                        <SelectValue placeholder="Select first day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monday">Monday</SelectItem>
                        <SelectItem value="sunday">Sunday</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium">Application Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="darkMode" className="block">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable dark mode for the application</p>
                    </div>
                    <Switch id="darkMode" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoSave" className="block">Auto Save</Label>
                      <p className="text-sm text-muted-foreground">Automatically save changes</p>
                    </div>
                    <Switch id="autoSave" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="timetable" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Timetable Settings</CardTitle>
              <CardDescription>
                Configure timetable generation and display preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Working Hours</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="startTime">Day Start Time</Label>
                    <Select defaultValue="9am">
                      <SelectTrigger>
                        <SelectValue placeholder="Select start time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8am">8:00 AM</SelectItem>
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endTime">Day End Time</Label>
                    <Select defaultValue="5pm">
                      <SelectTrigger>
                        <SelectValue placeholder="Select end time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                        <SelectItem value="5pm">5:00 PM</SelectItem>
                        <SelectItem value="6pm">6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="slotDuration">Time Slot Duration</Label>
                    <Select defaultValue="60">
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                        <SelectItem value="90">90 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="breakDuration">Break Duration</Label>
                    <Select defaultValue="10">
                      <SelectTrigger>
                        <SelectValue placeholder="Select break duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No break</SelectItem>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="10">10 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium">Display Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="showRoom" className="block">Show Room Information</Label>
                      <p className="text-sm text-muted-foreground">Display room details in timetable view</p>
                    </div>
                    <Switch id="showRoom" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="showTeacher" className="block">Show Teacher Information</Label>
                      <p className="text-sm text-muted-foreground">Display teacher details in timetable view</p>
                    </div>
                    <Switch id="showTeacher" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="colorCode" className="block">Color Code by Department</Label>
                      <p className="text-sm text-muted-foreground">Use different colors for each department</p>
                    </div>
                    <Switch id="colorCode" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="conflictNotifications" className="block">Conflict Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified about timetable conflicts</p>
                  </div>
                  <Switch id="conflictNotifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="changeNotifications" className="block">Change Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified about timetable changes</p>
                  </div>
                  <Switch id="changeNotifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="reminderNotifications" className="block">Reminder Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get reminders before classes</p>
                  </div>
                  <Switch id="reminderNotifications" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="backup" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Backup & Export</CardTitle>
              <CardDescription>
                Backup your data and export timetables
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Backup Settings</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="autoBackup" className="block">Automatic Backup</Label>
                    <p className="text-sm text-muted-foreground">Automatically backup your data periodically</p>
                  </div>
                  <Switch id="autoBackup" defaultChecked />
                </div>
                
                <div>
                  <Label htmlFor="backupFrequency" className="block mb-2">Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline">Create Manual Backup</Button>
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium">Export Options</h3>
                <div className="flex flex-col space-y-2">
                  <Label className="mb-2">Export Format</Label>
                  <div className="flex space-x-2">
                    <Button variant="outline">PDF</Button>
                    <Button variant="outline">Excel</Button>
                    <Button variant="outline">CSV</Button>
                    <Button variant="outline">iCal</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
