import { CastingRepository } from '../services/interfaces/casting.repository';
import { Casting } from '../entities/casting.entity';
import { mapCredictsRawToCasting } from './mappers/casting.mapper';
import { HttpClient } from '@core/shared/services/interfaces/http.client';
import { CreditsRawDto } from './dtos/credits-raw.dto';

export class CastingRestRepository implements CastingRepository {
  constructor(private httpClient: HttpClient) {}

  async getByMovieId(id: number): Promise<Casting[]> {
    const data = await this.httpClient.get<CreditsRawDto>(
      `movie/${id}/credits?language=en-US`,
    );
    return mapCredictsRawToCasting(data);
  }
}
