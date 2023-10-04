import React from 'react';
import { FlatList } from 'react-native';
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
      <FlatList
        horizontal={true}
        initialNumToRender={3}
        renderItem={({ item }) => (
          <Content>
            <PosterImage posterPath={item.posterPath} type="Small" />
          </Content>
        )}
        keyExtractor={(item) => `${item.id}`}
        data={movies}
      />
    </Container>
  );
};

export default MovieCarousel;
