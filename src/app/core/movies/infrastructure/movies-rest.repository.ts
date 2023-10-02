import { PaginationParamsDto } from '@core/shared/dtos/pagination-params.dto';
import { Movie } from '../entities/movie.entity';
import axios, { AxiosResponse } from 'axios';
import { PaginationResultsDto } from '@core/shared/dtos/pagination-results.dto';
import { MoviesRepository } from '../services/interfaces/movies.repository';
import { MovieRawDto } from './dtos/movie-raw.dto';

export class MoviesRestRepository implements MoviesRepository {
  async getById(id: number): Promise<Movie> {
    const url = `${process.env.EXPO_PUBLIC_API_URL}/movie/${id}?language=en-U`;
    const headers = {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN}`,
    };
    try {
      const response: AxiosResponse = await axios.get(url, { headers });
      return this.mapMovieRawToMovie(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Code:', error.response?.status);
        console.error('Result Data:', error.response?.data);
      }
      throw error;
    }
  }

  async getNowPlaying(
    pagination: PaginationParamsDto,
  ): Promise<PaginationResultsDto<Movie[]>> {
    const url = `${process.env.EXPO_PUBLIC_API_URL}/movie/now_playing?language=en-US&page=${pagination.page}`;
    const headers = {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN}`,
    };
    try {
      const response: AxiosResponse = await axios.get(url, { headers });
      const resultsMapped = response.data.results
        .map(this.mapMovieRawToMovie)
        .sort((a: Movie, b: Movie) => a.title.localeCompare(b.title));
      return this.mapToPagination(resultsMapped, response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Code:', error.response?.status);
        console.error('Result Data:', error.response?.data);
      }
      throw error;
    }
  }

  mapMovieRawToMovie(raw: MovieRawDto) {
    return {
      id: raw.id,
      title: raw.title,
      posterPath: raw.poster_path,
      releaseDate: raw.release_date,
      voteAverage: raw.vote_average,
      originalLanguage: raw.original_language,
      overview: raw.overview,
      genres: raw.genres ?? [],
      adult: raw.adult,
    } as unknown as Movie;
  }

  mapToPagination(movies: Movie[], response: AxiosResponse) {
    return {
      page: response.data.page,
      resutls: movies,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
    } as PaginationResultsDto<Movie[]>;
  }
}
