import { Movie, moviesRepository } from '@core';
import { useFavoriteSelector } from '@shared/redux/selectors';
import { useCallback, useEffect, useState } from 'react';

export const useGetNowPlaying = () => {
  const favorities = useFavoriteSelector();
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getNowPlaying = useCallback(async () => {
    try {
      setLoading(true);
      const { resutls } = await moviesRepository.getNowPlaying({
        page: 1,
        pageSize: 10,
      });
      const movieWithFavorities = resutls.map((m) => ({
        ...m,
        favorite: favorities.indexOf(m.id) > -1,
      }));
      setMovies(movieWithFavorities);
    } finally {
      setLoading(false);
    }
  }, [favorities]);

  useEffect(() => {
    getNowPlaying();
  }, [favorities, getNowPlaying]);

  return {
    loading,
    movies,
    getNowPlaying,
  };
};
