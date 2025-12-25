import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="w-4 h-4" />
          <span>Powered by AI Recommendation Engine</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
