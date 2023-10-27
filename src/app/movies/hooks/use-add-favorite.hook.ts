import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { moviesRepository } from '@core';
import { useSessionSelector } from '@shared/redux/selectors';
import { add, remove } from '@shared/redux/slices';
import { useToast } from '@shared/hooks/use-toast.hook';

export const useAddFavorite = () => {
  const dispatch = useDispatch();
  const { session } = useSessionSelector();
  const { showSuccess, showError } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const addFavorite = useCallback(
    async (favorite: boolean, movieId: number) => {
      try {
        if (!session) {
          throw new Error('Session not loaded');
        }

        if (movieId === 0) {
          throw new Error('Movie not loaded');
        }

        setLoading(true);
        const response = await moviesRepository.addFavorite(
          movieId,
          session.sessionId ?? '',
          favorite,
        );
        if (!response.success) {
          throw new Error(response.statusMessage);
        }
        dispatch(favorite ? add(movieId) : remove(movieId));
        showSuccess('Favorite Success');
      } catch (error) {
        showError((error as Error).message);
        console.log('Error on save Favorite', error);
      } finally {
        setLoading(false);
      }
    },
    [dispatch, session, showError, showSuccess],
  );

  return {
    loading,
    addFavorite,
  };
};
