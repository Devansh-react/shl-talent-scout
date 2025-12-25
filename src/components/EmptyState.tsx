import { FileSearch, ArrowRight } from "lucide-react";

const EmptyState = () => {
  return (
    <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center">
              <FileSearch className="w-10 h-10 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Ready to find the perfect assessments
              </h3>
              <p className="text-muted-foreground max-w-md">
                Enter a job description, natural language query, or URL above to get 
                AI-powered assessment recommendations tailored to your hiring needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                <span>Paste a full job description</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                <span>Use natural language queries</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                <span>Share a job posting URL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyState;
