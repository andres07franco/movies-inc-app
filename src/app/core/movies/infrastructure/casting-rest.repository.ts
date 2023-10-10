import { HttpClient } from '@core/shared/domain/interfaces/http.client';
import { CastingRepository } from '../domain/interfaces/casting.repository';
import { Casting } from '../domain/entities/casting.entity';
import { CreditsRawDto } from './dtos/credits-raw.dto';
import { mapCredictsRawToCasting } from './mappers/casting.mapper';

export class CastingRestRepository implements CastingRepository {
  constructor(private httpClient: HttpClient) {}

  async getByMovieId(id: number): Promise<Casting[]> {
    const data = await this.httpClient.get<CreditsRawDto>(
      `movie/${id}/credits?language=en-US`,
    );
    return mapCredictsRawToCasting(data);
  }
}
