import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, MapPin, Calendar, Info, Lock, UserPlus } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Destinations",
    to: "/destinations",
    icon: <MapPin className="h-4 w-4" />,
  },
  {
    title: "Bookings",
    to: "/bookings",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Contact Us",
    to: "/contact",
    icon: <Info className="h-4 w-4" />,
  },
];

const userMenuItems = [
  {
    title: "Login",
    to: "/login",
    icon: <Lock className="h-4 w-4" />,
  },
  {
    title: "Sign Up",
    to: "/signup",
    icon: <UserPlus className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout userMenuItems={userMenuItems} />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;