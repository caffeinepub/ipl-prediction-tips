import { useParams, Link } from '@tanstack/react-router';
import { usePrediction } from '../hooks/usePrediction';
import { Loader2, AlertCircle, ArrowLeft, Calendar, Trophy, TrendingUp } from 'lucide-react';

export default function PredictionDetailPage() {
  const { id } = useParams({ from: '/predictions/$id' });
  const { data: prediction, isLoading, error } = usePrediction(Number(id));

  if (isLoading) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-ipl-primary mx-auto" />
          <p className="text-muted-foreground">Loading prediction details...</p>
        </div>
      </div>
    );
  }

  if (error || !prediction) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-6 max-w-md">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
          <h2 className="text-2xl font-bold text-foreground">Prediction Not Found</h2>
          <p className="text-muted-foreground">
            {error instanceof Error ? error.message : 'The prediction you are looking for does not exist'}
          </p>
          <Link
            to="/predictions"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-ipl-primary hover:bg-ipl-primary/90 rounded-lg transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Predictions
          </Link>
        </div>
      </div>
    );
  }

  const matchDate = new Date(Number(prediction.matchDate) / 1000000);
  const confidenceLevel = Number(prediction.confidenceLevel);

  const getConfidenceColor = (level: number) => {
    if (level >= 80) return 'text-ipl-success bg-ipl-success/10 border-ipl-success';
    if (level >= 60) return 'text-ipl-warning bg-ipl-warning/10 border-ipl-warning';
    return 'text-ipl-danger bg-ipl-danger/10 border-ipl-danger';
  };

  const getConfidenceLabel = (level: number) => {
    if (level >= 80) return 'High Confidence';
    if (level >= 60) return 'Medium Confidence';
    return 'Low Confidence';
  };

  return (
    <div className="container py-12 md:py-16">
      <Link
        to="/predictions"
        className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-ipl-primary transition-colors mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Predictions
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="rounded-3xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border p-8 md:p-12 shadow-xl mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-ipl-primary" />
            <span className="text-sm font-semibold text-muted-foreground">
              {matchDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-2">
              {prediction.team1} vs {prediction.team2}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-ipl-primary to-ipl-secondary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-background/50 border border-ipl-border">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="h-5 w-5 text-ipl-primary" />
                <span className="text-sm font-semibold text-muted-foreground">Predicted Winner</span>
              </div>
              <p className="text-2xl font-black text-ipl-primary">
                {prediction.predictedWinner}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background/50 border border-ipl-border">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-5 w-5 text-ipl-secondary" />
                <span className="text-sm font-semibold text-muted-foreground">Confidence Level</span>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-2xl font-black text-foreground">
                  {confidenceLevel}%
                </p>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getConfidenceColor(confidenceLevel)}`}>
                  {getConfidenceLabel(confidenceLevel)}
                </span>
              </div>
            </div>
          </div>

          {/* Confidence Bar */}
          <div className="mb-8">
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-ipl-primary to-ipl-secondary rounded-full transition-all duration-500"
                style={{ width: `${confidenceLevel}%` }}
              />
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="rounded-3xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl font-black text-foreground mb-6">Match Analysis</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Team Form</h3>
              <p className="text-muted-foreground leading-relaxed">
                Based on recent performances, {prediction.predictedWinner} shows stronger form 
                heading into this match. Their batting lineup has been consistent, and the bowling 
                attack has been effective in recent games.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Key Factors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-ipl-primary mt-1">•</span>
                  <span>Head-to-head record favors {prediction.predictedWinner}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ipl-primary mt-1">•</span>
                  <span>Current team momentum and player availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ipl-primary mt-1">•</span>
                  <span>Venue conditions and pitch report analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ipl-primary mt-1">•</span>
                  <span>Recent performance statistics and trends</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Prediction Rationale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our {confidenceLevel}% confidence level is based on comprehensive analysis of team 
                statistics, player form, historical matchups, and current tournament standings. 
                {prediction.predictedWinner} has demonstrated superior performance in key areas 
                that are likely to be decisive in this match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
