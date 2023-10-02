import { Movie } from '@core/movies/entities/movie.entity';
import { PaginationParamsDto } from '@core/shared/dtos/pagination-params.dto';
import { PaginationResultsDto } from '@core/shared/dtos/pagination-results.dto';

export interface MoviesRepository {
  getById(id: number): Promise<Movie>;

  getNowPlaying(
    params: PaginationParamsDto,
  ): Promise<PaginationResultsDto<Movie[]>>;
}
