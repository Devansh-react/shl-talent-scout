import { CheckCircle2 } from "lucide-react";
import ResultCard from "./ResultCard";

interface Recommendation {
  assessment_name: string;
  assessment_url: string;
}

interface ResultsListProps {
  query: string;
  recommendations: Recommendation[];
}

const ResultsList = ({ query, recommendations }: ResultsListProps) => {
  return (
    <section className="w-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <h2 className="text-xl font-semibold text-foreground">
              {recommendations.length} Assessments Found
            </h2>
          </div>

          <div className="bg-secondary/50 rounded-lg px-4 py-3 mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Query: </span>
              {query.length > 150 ? `${query.substring(0, 150)}...` : query}
            </p>
          </div>

          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <ResultCard
                key={`${rec.assessment_name}-${index}`}
                rank={index + 1}
                assessmentName={rec.assessment_name}
                assessmentUrl={rec.assessment_url}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsList;
