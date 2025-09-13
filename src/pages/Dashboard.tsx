import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";
import { StudyRecommendations } from "@/components/StudyRecommendations";
import { ProgressChart } from "@/components/ProgressChart";
import { Clock, FileText, Target, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-muted-foreground">
            You're making great progress. Keep up the excellent work!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Study Time Today"
            value="3.5 hrs"
            change={12}
            icon={<Clock className="w-6 h-6" />}
            gradient
          />
          <StatsCard
            title="Documents Processed"
            value="24"
            change={8}
            icon={<FileText className="w-6 h-6" />}
          />
          <StatsCard
            title="Quiz Average"
            value="92%"
            change={5}
            icon={<Target className="w-6 h-6" />}
          />
          <StatsCard
            title="Weekly Progress"
            value="87%"
            change={-2}
            icon={<TrendingUp className="w-6 h-6" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProgressChart />
          </div>
          <div className="lg:col-span-1">
            <StudyRecommendations />
          </div>
        </div>
      </main>
    </div>
  );
}