import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  gradient?: boolean;
}

export function StatsCard({ title, value, change, icon, gradient = false }: StatsCardProps) {
  return (
    <Card 
      className={`p-6 transition-all duration-300 hover:scale-105 ${
        gradient ? 'bg-gradient-card' : ''
      } hover:shadow-xl`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1">
              {change > 0 ? (
                <ArrowUp className="w-4 h-4 text-success" />
              ) : (
                <ArrowDown className="w-4 h-4 text-destructive" />
              )}
              <span 
                className={`text-sm font-medium ${
                  change > 0 ? 'text-success' : 'text-destructive'
                }`}
              >
                {Math.abs(change)}%
              </span>
            </div>
          )}
        </div>
        <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
          {icon}
        </div>
      </div>
    </Card>
  );
}