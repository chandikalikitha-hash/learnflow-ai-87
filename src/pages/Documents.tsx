import { Navbar } from "@/components/Navbar";
import { DocumentUpload } from "@/components/DocumentUpload";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Search, Filter, Download, Eye, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const documents = [
  {
    id: '1',
    title: 'Introduction to Machine Learning.pdf',
    subject: 'Computer Science',
    pages: 245,
    uploadDate: '2024-01-15',
    status: 'processed',
    tags: ['ML', 'AI', 'Fundamentals'],
  },
  {
    id: '2',
    title: 'Neural Networks Deep Dive.docx',
    subject: 'Data Science',
    pages: 189,
    uploadDate: '2024-01-14',
    status: 'processed',
    tags: ['Neural Networks', 'Deep Learning'],
  },
  {
    id: '3',
    title: 'Data Preprocessing Techniques.pdf',
    subject: 'Data Science',
    pages: 87,
    uploadDate: '2024-01-13',
    status: 'processing',
    tags: ['Data Cleaning', 'Preprocessing'],
  },
];

export default function Documents() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Document Library</h1>
          <p className="text-muted-foreground">
            Upload and manage your study materials for AI-powered analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <DocumentUpload />

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search documents..." 
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {documents.map((doc) => (
                  <Card key={doc.id} className="p-4 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{doc.title}</h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span>{doc.subject}</span>
                            <span>•</span>
                            <span>{doc.pages} pages</span>
                            <span>•</span>
                            <span>{doc.uploadDate}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            {doc.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Documents</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Pages</span>
                  <span className="font-semibold">3,521</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subjects Covered</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="font-semibold">+5 docs</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Neural Networks', 'Python', 'Statistics', 'Deep Learning', 'Data Science'].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}