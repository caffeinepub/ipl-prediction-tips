import { usePredictions } from '../hooks/usePredictions';
import PredictionCard from '../components/PredictionCard';
import { Loader2, AlertCircle } from 'lucide-react';

export default function PredictionsPage() {
  const { data: predictions, isLoading, error } = usePredictions();

  if (isLoading) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-ipl-primary mx-auto" />
          <p className="text-muted-foreground">Loading predictions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4 max-w-md">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
          <h2 className="text-2xl font-bold text-foreground">Error Loading Predictions</h2>
          <p className="text-muted-foreground">
            {error instanceof Error ? error.message : 'Failed to load predictions'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
          Match Predictions
        </h1>
        <p className="text-lg text-muted-foreground">
          Expert predictions for upcoming IPL matches
        </p>
      </div>

      {predictions && predictions.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {predictions.map((prediction, index) => (
            <PredictionCard key={index} prediction={prediction} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 space-y-4">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
            <AlertCircle className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">No Predictions Yet</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Check back soon for expert predictions on upcoming IPL matches
          </p>
        </div>
      )}
    </div>
  );
}
