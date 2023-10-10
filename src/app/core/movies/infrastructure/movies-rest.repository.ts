import { HttpClient } from '@core/shared/domain/interfaces/http.client';
import { PaginationParamsDto } from '@core/shared/domain/dtos/pagination-params.dto';
import { PaginationResultsDto } from '@core/shared/domain/dtos/pagination-results.dto';
import { GenericResults } from '@core/shared/domain/dtos/generic-resutls.dto';
import { mapMovieRawToMovie, mapToPagination } from './mappers/movies.mapper';
import { MoviesRepository } from '../domain/interfaces/movies.repository';
import { Movie } from '../domain/entities/movie.entity';
import { MovieRawDto } from './dtos/movie-raw.dto';
import { PagedRawDto } from './dtos/paged-raw.dto';

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

  async addFavorite(
    movieId: number,
    sessionId: string,
    favorite: boolean,
  ): Promise<GenericResults> {
    const data = await this.httpClient.post<{
      success: boolean;
      status_code: number;
      status_message: string;
    }>(`account/null/favorite?session_id=${sessionId}`, {
      media_type: 'movie',
      media_id: movieId,
      favorite: favorite,
    });
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

  async getFavorities(
    sessionId: string,
  ): Promise<PaginationResultsDto<Movie[]>> {
    const data = await this.httpClient.get<PagedRawDto<MovieRawDto[]>>(
      `account/null/favorite/movies?language=en-US&page=1&session_id=${sessionId}`,
    );
    const dataMapped = mapToPagination(data);
    return dataMapped;
  }
}
