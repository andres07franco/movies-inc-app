import { Movie, moviesRepository } from '@core';
import { useEffect, useState } from 'react';

export const useGetNowPlaying = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getNowPlaying = async () => {
    try {
      setLoading(true);
      const response = await moviesRepository.getNowPlaying({
        page: 1,
        pageSize: 10,
      });
      setMovies(response.resutls);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNowPlaying();
  }, []);

  return {
    loading,
    movies,
    getNowPlaying,
  };
};
