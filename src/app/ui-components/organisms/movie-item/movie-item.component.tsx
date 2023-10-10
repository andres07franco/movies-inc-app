import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Movie } from '@core/core.module';
import { Card, Block, FavoriteButton } from '../../atoms';
import { Rating, MovieItemInfo } from '../../molecules';
import { Container, InfoWrapper, PosterImageStyled } from './movie-item.style';

interface Props {
  movie: Movie;
  showFavorite?: boolean;
  onPress: (movie: Movie) => void;
  onPressFavorite?: (movie: Movie) => void;
}
export const MovieItem: React.FC<Props> = ({
  movie,
  showFavorite,
  onPress,
  onPressFavorite,
}) => {
  const handlePress = () => onPress(movie);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Block>
        <Card>
          <PosterImageStyled posterPath={movie.posterPath} type="Small" />
          <Container>
            <InfoWrapper>
              <MovieItemInfo movie={movie} />
              {showFavorite && (
                <FavoriteButton
                  favorite={!!movie.favorite}
                  onPress={() => onPressFavorite && onPressFavorite(movie)}
                />
              )}
            </InfoWrapper>
            <Rating rate={movie.voteAverage} />
          </Container>
        </Card>
      </Block>
    </TouchableOpacity>
  );
};

MovieItem.defaultProps = {
  showFavorite: false,
};

export default MovieItem;
