import { useNavigate } from '@tanstack/react-router';
import type { Prediction } from '../backend';
import { Calendar, Trophy, TrendingUp } from 'lucide-react';

interface PredictionCardProps {
  prediction: Prediction;
  index: number;
}

export default function PredictionCard({ prediction, index }: PredictionCardProps) {
  const navigate = useNavigate();
  const matchDate = new Date(Number(prediction.matchDate) / 1000000);
  const confidenceLevel = Number(prediction.confidenceLevel);

  const getConfidenceColor = (level: number) => {
    if (level >= 80) return 'text-ipl-success bg-ipl-success/10 border-ipl-success';
    if (level >= 60) return 'text-ipl-warning bg-ipl-warning/10 border-ipl-warning';
    return 'text-ipl-danger bg-ipl-danger/10 border-ipl-danger';
  };

  const handleClick = () => {
    navigate({ to: '/predictions/$id', params: { id: String(index) } });
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-2xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border hover:border-ipl-primary transition-all hover:shadow-xl hover:scale-[1.02] p-6"
    >
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Calendar className="h-4 w-4" />
        <span className="font-semibold">
          {matchDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>

      <h3 className="text-xl font-black text-foreground mb-4 group-hover:text-ipl-primary transition-colors">
        {prediction.team1} vs {prediction.team2}
      </h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-ipl-border">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-ipl-primary" />
            <span className="text-sm font-semibold text-muted-foreground">Winner</span>
          </div>
          <span className="text-sm font-bold text-ipl-primary">
            {prediction.predictedWinner}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-ipl-border">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-ipl-secondary" />
            <span className="text-sm font-semibold text-muted-foreground">Confidence</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getConfidenceColor(confidenceLevel)}`}>
            {confidenceLevel}%
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-ipl-border">
        <span className="text-sm font-semibold text-ipl-primary group-hover:underline">
          View Details →
        </span>
      </div>
    </div>
  );
}
