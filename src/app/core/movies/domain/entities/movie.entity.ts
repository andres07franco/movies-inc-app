export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  originalLanguage: string;
  overview: string;
  genres: [
    {
      name: string;
    },
  ];
  adult: boolean;
  favorite: boolean;
}
