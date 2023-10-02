import axios, { AxiosResponse } from 'axios';
import { CastingRepository } from '../services/interfaces/casting.repository';
import { Casting } from '../entities/casting.entity';
import { CreditsRawDto } from './dtos/credits-raw.dto';

export class CastingRestRepository implements CastingRepository {
  async getByMovieId(id: number): Promise<Casting[]> {
    const url = `${process.env.EXPO_PUBLIC_API_URL}/movie/${id}/credits?language=en-US`;
    const headers = {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN}`,
    };
    try {
      const response: AxiosResponse = await axios.get(url, { headers });
      return response.data.cast.map(this.mapMovieRawToMovie);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Code:', error.response?.status);
        console.error('Result Data:', error.response?.data);
      }
      throw error;
    }
  }

  mapMovieRawToMovie(raw: CreditsRawDto) {
    return {
      adult: raw.adult,
      gender: raw.gender,
      id: raw.id,
      knownForDepartment: raw.known_for_department,
      name: raw.name,
      originalName: raw.original_name,
      popularity: raw.popularity,
      profilePath: raw.profile_path,
      castId: raw.castId,
      character: raw.character,
      creditId: raw.credit_id,
      order: raw.order,
    } as unknown as Casting;
  }
}
