import { Movie } from '@core/movies/entities/movie.entity';
import { GenericResults } from '@core/shared/dtos/generic-resutls.dto';
import { PaginationParamsDto } from '@core/shared/dtos/pagination-params.dto';
import { PaginationResultsDto } from '@core/shared/dtos/pagination-results.dto';

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

  getSimilar(id: number): Promise<Movie[]>;

  getRecommendations(id: number): Promise<Movie[]>;
}
