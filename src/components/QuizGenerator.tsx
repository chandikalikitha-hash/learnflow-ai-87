import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Brain, CheckCircle, XCircle, RefreshCw, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'What is the primary purpose of supervised learning in machine learning?',
    options: [
      'To cluster similar data points',
      'To learn from labeled training data',
      'To reduce dimensionality',
      'To generate new data samples'
    ],
    correctAnswer: 1,
    explanation: 'Supervised learning uses labeled training data to learn the relationship between input features and output labels.'
  },
  {
    id: '2',
    question: 'Which activation function is commonly used in hidden layers of neural networks?',
    options: [
      'Sigmoid',
      'Softmax',
      'ReLU',
      'Linear'
    ],
    correctAnswer: 2,
    explanation: 'ReLU (Rectified Linear Unit) is widely used due to its simplicity and effectiveness in avoiding vanishing gradient problems.'
  },
];

export function QuizGenerator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(sampleQuestions.length).fill(null));
  const { toast } = useToast();

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) {
      toast({
        title: "Please select an answer",
        description: "You must choose an option before submitting.",
        variant: "destructive",
      });
      return;
    }

    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (answerIndex === sampleQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(sampleQuestions.length).fill(null));
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / sampleQuestions.length) * 100;

  if (showResult) {
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    
    return (
      <Card className="p-8">
        <div className="text-center space-y-6">
          <Trophy className="w-16 h-16 mx-auto text-warning" />
          <h2 className="text-3xl font-bold">Quiz Complete!</h2>
          <div className="space-y-2">
            <p className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {percentage}%
            </p>
            <p className="text-muted-foreground">
              You got {score} out of {sampleQuestions.length} questions correct
            </p>
          </div>

          <div className="space-y-4 text-left max-w-2xl mx-auto">
            {sampleQuestions.map((q, index) => (
              <Card key={q.id} className="p-4">
                <div className="flex items-start gap-3">
                  {answers[index] === q.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive mt-1" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-2">{q.question}</p>
                    <p className="text-sm text-muted-foreground">{q.explanation}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button variant="gradient" size="lg" onClick={resetQuiz} className="mx-auto">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Another Quiz
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">AI-Generated Quiz</h3>
          </div>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {sampleQuestions.length}
          </span>
        </div>

        <Progress value={progress} className="h-2" />

        <div className="space-y-6">
          <h4 className="text-lg font-medium">
            {sampleQuestions[currentQuestion].question}
          </h4>

          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            <div className="space-y-3">
              {sampleQuestions[currentQuestion].options.map((option, index) => (
                <Card 
                  key={index} 
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedAnswer === index.toString() ? 'border-primary shadow-lg' : ''
                  }`}
                >
                  <Label htmlFor={`option-${index}`} className="flex items-center cursor-pointer">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <span className="ml-3">{option}</span>
                  </Label>
                </Card>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
                setSelectedAnswer(answers[currentQuestion - 1]?.toString() || "");
              }
            }}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button variant="gradient" onClick={handleAnswerSubmit}>
            {currentQuestion === sampleQuestions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </Card>
  );
}