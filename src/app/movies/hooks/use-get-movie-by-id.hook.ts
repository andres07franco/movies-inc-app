import { Movie, moviesRepository } from '@core';
import { useEffect, useState } from 'react';

export const useGetMovieById = (id: number) => {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await moviesRepository.getById(id);
        setMovie(response);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return {
    loading,
    movie,
  };
};
