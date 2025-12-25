import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ResultCardProps {
  rank: number;
  assessmentName: string;
  assessmentUrl: string;
  index: number;
}

const ResultCard = ({ rank, assessmentName, assessmentUrl, index }: ResultCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(assessmentUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Assessment URL has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy the link. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className="group bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <span className="text-lg font-semibold text-primary">#{rank}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
            {assessmentName}
          </h3>
          <a
            href={assessmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1 transition-colors break-all"
          >
            {assessmentUrl}
            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
          </a>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            {copied ? (
              <Check className="w-4 h-4 text-success" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="default"
            size="sm"
            asChild
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <a href={assessmentUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
