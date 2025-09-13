import { Button } from "@/components/ui/button";
import { BookOpen, Brain, FileText, BarChart3, User, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: <BookOpen className="w-4 h-4" /> },
    { path: "/documents", label: "Documents", icon: <FileText className="w-4 h-4" /> },
    { path: "/assessments", label: "Assessments", icon: <Brain className="w-4 h-4" /> },
    { path: "/analytics", label: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                StudyAI
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="gradient" size="sm" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Study Session
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}