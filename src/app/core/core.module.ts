import { MoviesRestRepository } from './movies/infrastructure/movies-rest.repository';
import { MoviesRepository } from './movies/services/interfaces/movies.repository';

export * from './movies/entities/movie.entity';
export * from './movies/services/interfaces/movies.repository';

export * from './shared/dtos/pagination-params.dto';
export * from './shared/dtos/pagination-results.dto';

const moviesRepository: MoviesRepository = new MoviesRestRepository();
export { moviesRepository };
