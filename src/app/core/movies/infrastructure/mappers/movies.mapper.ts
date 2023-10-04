import { Movie, PaginationResultsDto } from '@core/core.module';
import { MovieRawDto } from '../dtos/movie-raw.dto';
import { PagedRawDto } from '../dtos/paged-raw.dto';

export function mapMovieRawToMovie(raw: MovieRawDto) {
  return {
    id: raw.id,
    title: raw.title,
    posterPath: `https://image.tmdb.org/t/p/original${raw.poster_path}`,
    releaseDate: raw.release_date,
    voteAverage: raw.vote_average,
    originalLanguage: raw.original_language,
    overview: raw.overview,
    genres: raw.genres ?? [],
    adult: raw.adult,
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
