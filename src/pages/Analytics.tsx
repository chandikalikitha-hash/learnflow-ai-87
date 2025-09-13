import { Navbar } from "@/components/Navbar";
import { ProgressChart } from "@/components/ProgressChart";
import { StatsCard } from "@/components/StatsCard";
import { TrendingUp, Clock, Target, Award } from "lucide-react";

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Track your learning progress and identify areas for improvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Study Hours"
            value="156"
            change={15}
            icon={<Clock className="w-6 h-6" />}
          />
          <StatsCard
            title="Completion Rate"
            value="87%"
            change={8}
            icon={<Target className="w-6 h-6" />}
          />
          <StatsCard
            title="Achievements"
            value="12"
            change={20}
            icon={<Award className="w-6 h-6" />}
          />
          <StatsCard
            title="Productivity Score"
            value="A+"
            icon={<TrendingUp className="w-6 h-6" />}
            gradient
          />
        </div>

        <ProgressChart />
      </main>
    </div>
  );
}