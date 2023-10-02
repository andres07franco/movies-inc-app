import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Movie } from '@core/core.module';
import { PosterImage, Card, Block } from '../../atoms';
import { Rating, MovieItemInfo } from '../../molecules';
import { Container } from './movie-item.style';

interface Props {
  movie: Movie;
  onPress: (movie: Movie) => void;
}
export const MovieItem: React.FC<Props> = ({ movie, onPress }) => {
  const handlePress = () => onPress(movie);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Block>
        <Card>
          <PosterImage posterPath={movie.posterPath} type="Small" />
          <Container>
            <MovieItemInfo movie={movie} />
            <Rating rate={movie.voteAverage} />
          </Container>
        </Card>
      </Block>
    </TouchableOpacity>
  );
};

export default MovieItem;