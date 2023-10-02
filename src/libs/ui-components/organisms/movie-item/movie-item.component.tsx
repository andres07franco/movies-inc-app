import React from 'react';
import { Movie } from '@core/core.module';
import { Container } from './movie-item.style';
import Rating from '@ui-components/molecules/rating/rating.component';
import { Block } from '@ui-components/atoms/block/block.component';
import { Card } from '@ui-components/atoms/card/card.component';
import { PosterImage } from '@ui-components/atoms/poster-image/poster-image.component';
import { TouchableOpacity } from 'react-native';
import MovieItemInfo from '@ui-components/molecules/movie-item-info/movie-item-info.component';

interface Props {
  movie: Movie;
  onPress: (movie: Movie) => void;
}
const MovieItem: React.FC<Props> = ({ movie, onPress }) => {
  const handlePress = () => onPress(movie);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Block>
        <Card>
          <PosterImage
            source={{
              uri: `https://image.tmdb.org/t/p/original${movie.posterPath}`,
            }}
          />
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
