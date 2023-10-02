import { Casting, castingRepository } from '@core';
import { useEffect, useState } from 'react';

export const useGetCastingByMovie = (id: number) => {
  const [casting, setCasting] = useState<Casting[]>([]);
  useEffect(() => {
    const fetchCasting = async () => {
      const response = await castingRepository.getByMovieId(id);
      setCasting(response);
    };
    fetchCasting();
  }, [id]);

  return {
    casting,
  };
};
