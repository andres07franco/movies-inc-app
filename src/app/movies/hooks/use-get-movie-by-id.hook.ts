import { Movie, moviesRepository } from '@core';
import { useEffect, useState } from 'react';

export const useGetMovieById = (id: number) => {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await moviesRepository.getById(id);
      setMovie(response);
    };
    fetchMovie();
  }, [id]);

  return {
    movie,
  };
};
