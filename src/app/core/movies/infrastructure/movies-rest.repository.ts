import { PaginationParamsDto } from '@core/shared/dtos/pagination-params.dto';
import { Movie } from '../entities/movie.entity';
import axios, { AxiosResponse } from 'axios';
import { PaginationResultsDto } from '@core/shared/dtos/pagination-results.dto';
import { MoviesRepository } from '../services/interfaces/movies.repository';

export class MoviesRestRepository implements MoviesRepository {
  async getById(id: string): Promise<Movie> {
    return {
      id,
      title: 'Avengers',
    };
  }

  async getNowPlaying(
    _: PaginationParamsDto,
  ): Promise<PaginationResultsDto<Movie[]>> {
    const url = `${process.env.EXPO_PUBLIC_API_URL}/movie/now_playing?language=en-US&page=1`;
    const headers = {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN}`,
    };

    try {
      const response: AxiosResponse = await axios.get(url, { headers });
      const resultsMapped = response.data.results.map(
        (x: { id: any; title: any }) => ({
          id: x.id,
          title: x.title,
        }),
      );
      const result = {
        page: response.data.page,
        resutls: resultsMapped,
        totalPages: response.data.total_pages,
        totalResults: response.data.total_results,
      } as unknown as PaginationResultsDto<Movie[]>;
      return result;
    } catch (error) {
      console.error('Error:', error);
      if (axios.isAxiosError(error)) {
        console.error('Código de estado:', error.response?.status);
        console.error('Datos de respuesta:', error.response?.data);
      }
      throw error;
    }
  }
}
