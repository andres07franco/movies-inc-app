export interface MovieRawDto {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  original_language: string;
  overview: string;
  genres: [{ name: string }];
  adult: boolean;
}
