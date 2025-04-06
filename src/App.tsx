
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Timetables from "./pages/Timetables";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Classrooms from "./pages/Classrooms";
import Generator from "./pages/Generator";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/timetables" element={<AppLayout><Timetables /></AppLayout>} />
          <Route path="/courses" element={<AppLayout><Courses /></AppLayout>} />
          <Route path="/teachers" element={<AppLayout><Teachers /></AppLayout>} />
          <Route path="/classrooms" element={<AppLayout><Classrooms /></AppLayout>} />
          <Route path="/generator" element={<AppLayout><Generator /></AppLayout>} />
          <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
