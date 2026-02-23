import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Prediction } from '../backend';

export function usePrediction(id: number) {
  const { actor, isFetching } = useActor();

  return useQuery<Prediction>({
    queryKey: ['prediction', id],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getPrediction(BigInt(id));
    },
    enabled: !!actor && !isFetching && !isNaN(id),
  });
}
