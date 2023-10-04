import { Movie, moviesRepository } from '@core';
import { useCallback, useEffect, useState } from 'react';

export const useGetMovieById = (id: number) => {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(false);
  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true);
      const response = await moviesRepository.getById(id);
      setMovie(response);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie, id]);

  return {
    loading,
    movie,
    fetchMovie,
  };
};
