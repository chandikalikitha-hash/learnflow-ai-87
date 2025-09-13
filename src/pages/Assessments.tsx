import { Navbar } from "@/components/Navbar";
import { QuizGenerator } from "@/components/QuizGenerator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Clock, Trophy, Target } from "lucide-react";

export default function Assessments() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Assessments</h1>
          <p className="text-muted-foreground">
            Test your knowledge with AI-generated quizzes tailored to your study materials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <QuizGenerator />
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card">
              <h3 className="text-lg font-semibold mb-4">Your Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Score</span>
                  <span className="font-semibold text-2xl">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Quizzes Taken</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Best Streak</span>
                  <span className="font-semibold">7 days</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}