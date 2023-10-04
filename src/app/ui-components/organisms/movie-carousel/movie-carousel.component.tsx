import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from '@translations';
import { PosterImage } from '../../atoms';
import { Container, Content, Title } from './movie-carousel.style';
import { Movie } from '@core/core.module';

interface Props {
  title: string;
  movies: Movie[];
}
export const MovieCarousel: React.FC<Props> = ({ title, movies }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title type="Subtitle" color="neutral100">
        {t(title)}
      </Title>
      <ScrollView horizontal={true}>
        {movies.map((movie) => (
          <Content key={movie.id}>
            <PosterImage posterPath={movie.posterPath} type="Small" />
          </Content>
        ))}
      </ScrollView>
    </Container>
  );
};

export default MovieCarousel;
