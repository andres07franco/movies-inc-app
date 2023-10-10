import React from 'react';
import { Movie } from '@core';
import { Container, Detail, Title } from './movie-item-info.style';

interface Props {
  movie: Movie;
}
export const MovieItemInfo: React.FC<Props> = ({ movie }) => {
  return (
    <Container>
      <Title type="Subtitle2" color="neutral100">
        {movie.title}
      </Title>
      <Detail type="Caption" color="neutral90">
        Release date: {movie.releaseDate}
      </Detail>
      <Detail type="Caption" color="neutral90">
        language: {movie.originalLanguage}
      </Detail>
    </Container>
  );
};

export default MovieItemInfo;
