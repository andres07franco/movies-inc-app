import { Casting } from '../entities/casting.entity';

export interface CastingRepository {
  getByMovieId(id: number): Promise<Casting[]>;
}
