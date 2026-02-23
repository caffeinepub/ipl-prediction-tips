import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Prediction } from '../backend';

export function usePredictions() {
  const { actor, isFetching } = useActor();

  return useQuery<Prediction[]>({
    queryKey: ['predictions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPredictions();
    },
    enabled: !!actor && !isFetching,
  });
}
