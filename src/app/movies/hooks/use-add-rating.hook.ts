import { useAtomValue } from 'jotai';
import Toast from 'react-native-root-toast';
import { moviesRepository } from '@core';
import { sessionAtom } from '@shared/states/session.state';

import { useCallback, useState } from 'react';

export const useAddRating = () => {
  const session = useAtomValue(sessionAtom);
  const [loading, setLoading] = useState<boolean>(false);
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
          session.sessionId,
          rate,
        );
        if (response.success) {
          Toast.show('Rating Success', {
            duration: Toast.durations.LONG,
            backgroundColor: '#282ddb',
          });
          callback();
        }
      } catch (error) {
        Toast.show((error as Error).message, {
          duration: Toast.durations.LONG,
          backgroundColor: 'red',
        });
        console.log('Error on send reating', error);
      } finally {
        setLoading(false);
      }
    },
    [session],
  );

  return {
    loading,
    addRating,
  };
};
