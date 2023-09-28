import { Movie, moviesRepository } from '@core';
import { useEffect, useState } from 'react';

export const useGetNowPlaying = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const response = await moviesRepository.getNowPlaying({
        page: 1,
        pageSize: 10,
      });
      setMovies(response.resutls);
    };
    fetchNowPlaying();
  }, []);

  return {
    movies,
  };
};
