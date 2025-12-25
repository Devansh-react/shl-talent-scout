import { useState, useRef } from "react";
import Header from "@/components/Header";
import InputForm from "@/components/InputForm";
import ResultsList from "@/components/ResultsList";
import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import ErrorState from "@/components/ErrorState";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const API_BASE_URL = "https://recomendation-system-0-0.onrender.com";

interface Recommendation {
  assessment_name: string;
  assessment_url: string;
}

interface ApiResponse {
  query: string;
  recommendations: Recommendation[];
}

type AppState = "idle" | "loading" | "success" | "error";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  const [state, setState] = useState<AppState>("idle");
  const [results, setResults] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [lastQuery, setLastQuery] = useState<string>("");
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (query: string) => {
    setState("loading");
    setLastQuery(query);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);

      }
      const rawData = await response.json();

      const transformedData: ApiResponse = {
        query: rawData.query,
        recommendations: rawData.recommendations.map((rec: any) => ({
          assessment_name: rec.name,
          assessment_url: rec.url,
        })),
      };

      setResults(transformedData);

      setState("success");

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (err) {
      console.error("API Error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to fetch recommendations. Please try again."
      );
      setState("error");
    }
  };

  const handleRetry = () => {
    if (lastQuery) handleSubmit(lastQuery);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-8 space-y-12">
        <InputForm onSubmit={handleSubmit} isLoading={state === "loading"} />

        <div ref={resultsRef}>
          {state === "idle" && <EmptyState />}
          {state === "loading" && <LoadingState />}
          {state === "error" && (
            <ErrorState message={error} onRetry={handleRetry} />
          )}
          {state === "success" && results && (
            <ResultsList
              query={results.query}
              recommendations={results.recommendations}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
