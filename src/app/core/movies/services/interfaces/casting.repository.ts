import { Casting } from '@core/movies/entities/casting.entity';

export interface CastingRepository {
  getByMovieId(id: number): Promise<Casting[]>;
}
