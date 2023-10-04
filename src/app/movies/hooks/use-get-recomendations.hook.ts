import { Movie, moviesRepository } from '@core';
import { useEffect, useState } from 'react';

export const useGetRecomendations = (id: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await moviesRepository.getRecommendations(id);
        setMovies(response);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [id]);

  return {
    loading,
    movies,
  };
};
