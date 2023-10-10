import { useDispatch } from 'react-redux';
import { Movie, moviesRepository } from '@core';
import { fill } from '@shared/redux/slices';
import { useSessionSelector } from '@shared/redux/selectors';
import { useCallback, useEffect, useState } from 'react';

export const useGetFavorities = () => {
  const dispatch = useDispatch();
  const { session } = useSessionSelector();
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getFavorities = useCallback(async () => {
    try {
      setLoading(true);
      const { resutls } = await moviesRepository.getFavorities(
        session.sessionId,
      );
      setMovies(resutls);
      dispatch(fill(resutls.map((m) => m.id)));
    } finally {
      setLoading(false);
    }
  }, [dispatch, session.sessionId]);

  useEffect(() => {
    if (session.sessionId) {
      getFavorities();
    }
  }, [getFavorities, session.sessionId]);

  return {
    loading,
    movies,
    getFavorities,
  };
};
