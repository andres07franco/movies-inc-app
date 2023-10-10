import { PaginationParamsDto } from '@core/shared/domain/dtos/pagination-params.dto';
import { Movie } from '../entities/movie.entity';
import { PaginationResultsDto } from '@core/shared/domain/dtos/pagination-results.dto';
import { GenericResults } from '@core/shared/domain/dtos/generic-resutls.dto';

export interface MoviesRepository {
  getById(id: number): Promise<Movie>;

  getNowPlaying(
    params: PaginationParamsDto,
  ): Promise<PaginationResultsDto<Movie[]>>;

  addRating(
    movieId: number,
    sessionId: string,
    value: number,
  ): Promise<GenericResults>;

  addFavorite(
    movieId: number,
    sessionId: string,
    favorite: boolean,
  ): Promise<GenericResults>;

  getSimilar(id: number): Promise<Movie[]>;

  getRecommendations(id: number): Promise<Movie[]>;

  getFavorities(sessionId: string): Promise<PaginationResultsDto<Movie[]>>;
}
