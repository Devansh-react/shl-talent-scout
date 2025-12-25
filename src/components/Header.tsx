import { Brain } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/10">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              SHL Assessment Recommendation System
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            AI-powered assessment recommendations for hiring managers. Enter a job description, 
            query, or URL to get personalized assessment suggestions.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
