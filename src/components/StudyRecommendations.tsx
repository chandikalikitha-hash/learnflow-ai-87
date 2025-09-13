import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, TrendingUp, BookOpen, Brain, Star } from "lucide-react";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: string;
  priority: 'High' | 'Medium' | 'Low';
  icon: React.ReactNode;
}

const recommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Review Chapter 3: Machine Learning Basics',
    description: 'Based on your quiz performance, reinforcing ML fundamentals would improve your understanding.',
    category: 'Review',
    difficulty: 'Medium',
    estimatedTime: '30 min',
    priority: 'High',
    icon: <Brain className="w-5 h-5" />,
  },
  {
    id: '2',
    title: 'Practice Neural Network Problems',
    description: 'You\'re ready to tackle advanced neural network exercises to solidify your knowledge.',
    category: 'Practice',
    difficulty: 'Hard',
    estimatedTime: '45 min',
    priority: 'Medium',
    icon: <Target className="w-5 h-5" />,
  },
  {
    id: '3',
    title: 'Quick Review: Data Preprocessing',
    description: 'A brief refresher on data preprocessing techniques before your upcoming assessment.',
    category: 'Quick Review',
    difficulty: 'Easy',
    estimatedTime: '15 min',
    priority: 'High',
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

export function StudyRecommendations() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success/10 text-success';
      case 'Medium': return 'bg-warning/10 text-warning';
      case 'Hard': return 'bg-destructive/10 text-destructive';
      default: return '';
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'High') {
      return <Star className="w-4 h-4 text-warning fill-warning" />;
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">AI Study Recommendations</h2>
        <Button variant="outline" size="sm">
          <Brain className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-4">
        {recommendations.map((rec) => (
          <Card 
            key={rec.id} 
            className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4 flex-1">
                <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
                  {rec.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{rec.title}</h3>
                    {getPriorityIcon(rec.priority)}
                  </div>
                  <p className="text-muted-foreground">{rec.description}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Badge variant="outline">{rec.category}</Badge>
                    <Badge className={getDifficultyColor(rec.difficulty)}>
                      {rec.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {rec.estimatedTime}
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="gradient" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Start
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}