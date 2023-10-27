import {
  HttpClient,
  PaginationParamsDto,
  PaginationResultsDto,
  GenericResults,
} from '@core/shared/domain';
import {
  GenericResultsRawDto,
  mapToGenericResult,
} from '@core/shared/infrastructure';
import { Movie, MoviesRepository } from '@core/movies/domain';
import { MovieRawDto, PagedRawDto } from '../dtos';
import { mapMovieRawToMovie, mapToPagination } from '../mappers';

export class MoviesRestRepository implements MoviesRepository {
  constructor(private httpClient: HttpClient) {}

  async addRating(
    movieId: number,
    sessionId: string,
    value: number,
  ): Promise<GenericResults> {
    const data = await this.httpClient.post<GenericResultsRawDto>(
      `movie/${movieId}/rating?guest_session_id=${sessionId}`,
      { value },
    );
    return mapToGenericResult(data);
  }

  async addFavorite(
    movieId: number,
    sessionId: string,
    favorite: boolean,
  ): Promise<GenericResults> {
    const data = await this.httpClient.post<GenericResultsRawDto>(
      `account/null/favorite?session_id=${sessionId}`,
      {
        media_type: 'movie',
        media_id: movieId,
        favorite: favorite,
      },
    );
    return mapToGenericResult(data);
  }

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
