import { PaginationResultsDto } from '@core/shared/domain/dtos/pagination-results.dto';
import { Movie } from '../../domain/entities/movie.entity';
import { MovieRawDto } from '../dtos/movie-raw.dto';
import { PagedRawDto } from '../dtos/paged-raw.dto';

const imageUrlBase = process.env.EXPO_PUBLIC_IMAGE_URL_BASE;

export function mapMovieRawToMovie(raw: MovieRawDto) {
  return {
    id: raw.id,
    title: raw.title,
    posterPath: `${imageUrlBase}${raw.poster_path}`,
    releaseDate: raw.release_date,
    voteAverage: raw.vote_average,
    originalLanguage: raw.original_language,
    overview: raw.overview,
    genres: raw.genres ?? [],
    adult: raw.adult,
    favorite: false,
  } as unknown as Movie;
}

export function mapToPagination(response: PagedRawDto<MovieRawDto[]>) {
  return {
    page: response.page,
    resutls: response.results
      .map(mapMovieRawToMovie)
      .sort((a: Movie, b: Movie) => a.title.localeCompare(b.title)),
    totalPages: response.total_pages,
    totalResults: response.total_results,
  } as PaginationResultsDto<Movie[]>;
}
