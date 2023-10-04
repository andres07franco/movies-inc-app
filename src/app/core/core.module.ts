import { AuthenticationRestProvider } from './authentication/infraestructure/authentication-rest.provider';
import { AuthenticationProvider } from './authentication/services/interfaces/authentication.provider';
import { CastingRestRepository } from './movies/infrastructure/casting-rest.repository';
import { MoviesRestRepository } from './movies/infrastructure/movies-rest.repository';
import { CastingRepository } from './movies/services/interfaces/casting.repository';
import { MoviesRepository } from './movies/services/interfaces/movies.repository';
import { HttpAxionClient } from './shared/infrastructure/clients/http-axios.client';
import { HttpClient } from './shared/services/interfaces/http.client';

export * from './movies/entities/movie.entity';
export * from './movies/services/interfaces/movies.repository';

export * from './movies/entities/casting.entity';
export * from './movies/services/interfaces/casting.repository';

export * from './shared/dtos/pagination-params.dto';
export * from './shared/dtos/pagination-results.dto';

const httpClient: HttpClient = new HttpAxionClient(
  process.env.EXPO_PUBLIC_API_URL as string,
  process.env.EXPO_PUBLIC_AUTH_TOKEN as string,
);
const moviesRepository: MoviesRepository = new MoviesRestRepository(httpClient);
const castingRepository: CastingRepository = new CastingRestRepository(
  httpClient,
);

const authenticationProvider: AuthenticationProvider =
  new AuthenticationRestProvider(httpClient);

export { moviesRepository, castingRepository, authenticationProvider };
