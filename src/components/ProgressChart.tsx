import { Card } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weeklyData = [
  { day: 'Mon', studyTime: 120, quizScore: 85, documents: 3 },
  { day: 'Tue', studyTime: 150, quizScore: 92, documents: 5 },
  { day: 'Wed', studyTime: 90, quizScore: 78, documents: 2 },
  { day: 'Thu', studyTime: 180, quizScore: 95, documents: 6 },
  { day: 'Fri', studyTime: 200, quizScore: 98, documents: 8 },
  { day: 'Sat', studyTime: 160, quizScore: 88, documents: 4 },
  { day: 'Sun', studyTime: 140, quizScore: 91, documents: 3 },
];

const monthlyProgress = [
  { week: 'Week 1', completion: 65, target: 70 },
  { week: 'Week 2', completion: 72, target: 75 },
  { week: 'Week 3', completion: 88, target: 80 },
  { week: 'Week 4', completion: 95, target: 85 },
];

export function ProgressChart() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="weekly" className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Learning Analytics</h3>
          <TabsList>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="weekly" className="space-y-4">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="colorStudy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(271, 91%, 65%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(271, 91%, 65%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="studyTime"
                stroke="hsl(271, 91%, 65%)"
                fillOpacity={1}
                fill="url(#colorStudy)"
                strokeWidth={2}
                name="Study Time (min)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="completion" fill="hsl(271, 91%, 65%)" name="Completion %" radius={[8, 8, 0, 0]} />
              <Bar dataKey="target" fill="hsl(217, 91%, 60%)" name="Target %" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="quizScore" 
                stroke="hsl(142, 76%, 56%)" 
                strokeWidth={2}
                dot={{ fill: 'hsl(142, 76%, 56%)' }}
                name="Quiz Score %"
              />
              <Line 
                type="monotone" 
                dataKey="documents" 
                stroke="hsl(217, 91%, 60%)" 
                strokeWidth={2}
                dot={{ fill: 'hsl(217, 91%, 60%)' }}
                name="Documents Studied"
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
}