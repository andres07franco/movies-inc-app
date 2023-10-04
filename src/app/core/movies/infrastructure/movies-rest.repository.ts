import { PaginationParamsDto } from '@core/shared/dtos/pagination-params.dto';
import { Movie } from '../entities/movie.entity';
import { PaginationResultsDto } from '@core/shared/dtos/pagination-results.dto';
import { MoviesRepository } from '../services/interfaces/movies.repository';
import { mapMovieRawToMovie, mapToPagination } from './mappers/movies.mapper';
import { HttpClient } from '@core/shared/services/interfaces/http.client';
import { MovieRawDto } from './dtos/movie-raw.dto';
import { PagedRawDto } from './dtos/paged-raw.dto';
import { GenericResults } from '@core/shared/dtos/generic-resutls.dto';

export class MoviesRestRepository implements MoviesRepository {
  constructor(private httpClient: HttpClient) {}

  async getById(id: number): Promise<Movie> {
    const data = await this.httpClient.get<MovieRawDto>(
      `movie/${id}?language=en-U`,
    );
    return mapMovieRawToMovie(data);
  }

  async getNowPlaying(
    pagination: PaginationParamsDto,
  ): Promise<PaginationResultsDto<Movie[]>> {
    const data = await this.httpClient.get<PagedRawDto<MovieRawDto[]>>(
      `movie/now_playing?language=en-US&page=${pagination.page}`,
    );
    return mapToPagination(data);
  }

  async addRating(
    movieId: number,
    sessionId: string,
    value: number,
  ): Promise<GenericResults> {
    const data = await this.httpClient.post<{
      success: boolean;
      status_code: number;
      status_message: string;
    }>(`movie/${movieId}/rating?guest_session_id=${sessionId}`, { value });
    return {
      success: data.success,
      statusMessage: data.status_message,
      statusCode: data.status_code,
    };
  }

  async getSimilar(id: number): Promise<Movie[]> {
    const data = await this.httpClient.get<PagedRawDto<MovieRawDto[]>>(
      `movie/${id}/similar?language=en-US&page=1`,
    );
    const dataMapped = mapToPagination(data);
    return dataMapped.resutls;
  }

  async getRecommendations(id: number): Promise<Movie[]> {
    const data = await this.httpClient.get<PagedRawDto<MovieRawDto[]>>(
      `movie/${id}/recommendations?language=en-US&page=1`,
    );
    const dataMapped = mapToPagination(data);
    return dataMapped.resutls;
  }
}
