import { HttpClient } from '@core/shared/domain';
import { Casting, CastingRepository } from '@core/movies/domain';
import { CreditsRawDto } from '../dtos';
import { mapCredictsRawToCasting } from '../mappers';

export class CastingRestRepository implements CastingRepository {
  constructor(private httpClient: HttpClient) {}

  async getByMovieId(id: number): Promise<Casting[]> {
    const data = await this.httpClient.get<CreditsRawDto>(
      `movie/${id}/credits?language=en-US`,
    );
    return mapCredictsRawToCasting(data);
  }
}
