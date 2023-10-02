import { CastingRestRepository } from './movies/infrastructure/casting-rest.repository';
import { MoviesRestRepository } from './movies/infrastructure/movies-rest.repository';
import { CastingRepository } from './movies/services/interfaces/casting.repository';
import { MoviesRepository } from './movies/services/interfaces/movies.repository';

export * from './movies/entities/movie.entity';
export * from './movies/services/interfaces/movies.repository';

export * from './movies/entities/casting.entity';
export * from './movies/services/interfaces/casting.repository';

export * from './shared/dtos/pagination-params.dto';
export * from './shared/dtos/pagination-results.dto';

const moviesRepository: MoviesRepository = new MoviesRestRepository();
const castingRepository: CastingRepository = new CastingRestRepository();

export { moviesRepository, castingRepository };
