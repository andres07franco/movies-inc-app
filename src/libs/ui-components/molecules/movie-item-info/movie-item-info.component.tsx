import React from 'react';
import { Container, Detail, Title } from './movie-item-info.style';
import { Movie } from '@core/core.module';

interface Props {
  movie: Movie;
}
const MovieItemInfo: React.FC<Props> = ({ movie }) => {
  return (
    <Container>
      <Title type="Subtitle" color="neutral100">
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
