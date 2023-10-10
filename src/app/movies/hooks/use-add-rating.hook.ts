import { useCallback, useState } from 'react';
import { moviesRepository } from '@core';
import { useSessionSelector } from '@shared/redux/selectors';
import { useToast } from '@shared/hooks/use-toast.hook';

export const useAddRating = () => {
  const { session } = useSessionSelector();
  const [loading, setLoading] = useState<boolean>(false);
  const { showSuccess, showError } = useToast();

  const addRating = useCallback(
    async (rate: number, movieId: number, callback: () => void) => {
      try {
        if (!session) {
          throw new Error('Session not loaded');
        }
        if (movieId === 0) {
          throw new Error('Movie not loaded');
        }
        setLoading(true);
        const response = await moviesRepository.addRating(
          movieId,
          session.sessionId ?? '',
          rate,
        );
        if (response.success) {
          showSuccess('Rating Success', 300);
          callback();
        }
      } catch (error) {
        showError((error as Error).message);
        console.log('Error on send reating', error);
      } finally {
        setLoading(false);
      }
    },
    [session, showError, showSuccess],
  );

  return {
    loading,
    addRating,
  };
};
