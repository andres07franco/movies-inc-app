import { AuthenticationRestProvider } from './authentication/infraestructure/authentication-rest.provider';
import { AuthenticationProvider } from './authentication/domain/interfaces/authentication.provider';
import { CastingRestRepository } from './movies/infrastructure/casting-rest.repository';
import { MoviesRestRepository } from './movies/infrastructure/movies-rest.repository';
import { CastingRepository } from './movies/domain/interfaces/casting.repository';
import { MoviesRepository } from './movies/domain/interfaces/movies.repository';
import { HttpAxionClient } from './shared/infrastructure/clients/http-axios.client';
import { HttpClient } from './shared/domain/interfaces/http.client';
import { LoginService } from './authentication/domain/services/login.service';

export * from './movies/domain/entities/movie.entity';
export * from './movies/domain/interfaces/movies.repository';

export * from './movies/domain/entities/casting.entity';
export * from './movies/domain/interfaces/casting.repository';

export * from './shared/domain/dtos/pagination-params.dto';
export * from './shared/domain/dtos/pagination-results.dto';

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

const loginService = new LoginService(authenticationProvider);

export {
  moviesRepository,
  castingRepository,
  authenticationProvider,
  loginService,
};
