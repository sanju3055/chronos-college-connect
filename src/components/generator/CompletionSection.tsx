
import React from 'react';

const CompletionSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div className="space-y-1">
          <p className="font-medium text-lg">Timetable Generated Successfully!</p>
          <p className="text-muted-foreground">
            An optimized timetable has been created and is ready to view
          </p>
        </div>
      </div>
      
      <div className="pt-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <div className="font-medium">Department:</div>
            <div>Computer Science</div>
          </div>
          <div className="text-sm">
            <div className="font-medium">Year/Semester:</div>
            <div>All Years / Fall 2024</div>
          </div>
          <div className="text-sm">
            <div className="font-medium">Generated On:</div>
            <div>{new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionSection;
