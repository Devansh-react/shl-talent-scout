import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, Loader2 } from "lucide-react";

const sampleQueries = [
  {
    label: "Java Developer",
    query: "Looking to hire a Java developer with strong problem-solving skills and ability to work in an agile team environment.",
  },
  {
    label: "Sales Manager",
    query: "We need a sales manager who can lead a team, has excellent communication skills, and can handle high-pressure situations.",
  },
  {
    label: "Data Analyst",
    query: "Seeking a data analyst with strong analytical thinking, attention to detail, and proficiency in statistical analysis.",
  },
];

interface InputFormProps {
  onSubmit: (query: string) => void;
  isLoading: boolean;
}

const InputForm = ({ onSubmit, isLoading }: InputFormProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSubmit(query.trim());
    }
  };

  const handleSampleClick = (sampleQuery: string) => {
    setQuery(sampleQuery);
  };

  return (
    <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a job description, natural language query, or paste a URL to a job posting..."
                className="min-h-[160px] text-base resize-none bg-card border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl shadow-sm"
                disabled={isLoading}
              />
              <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                {query.length} characters
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Try:
                </span>
                {sampleQueries.map((sample) => (
                  <button
                    key={sample.label}
                    type="button"
                    onClick={() => handleSampleClick(sample.query)}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {sample.label}
                  </button>
                ))}
              </div>

              <Button
                type="submit"
                disabled={!query.trim() || isLoading}
                size="lg"
                className="gap-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 min-w-[160px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Get Recommendations
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InputForm;
