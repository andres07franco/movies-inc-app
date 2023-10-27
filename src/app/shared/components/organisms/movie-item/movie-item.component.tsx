import React from 'react';
import { Movie } from '@core/core.module';
import { Card, FavoriteButton } from '../../atoms';
import { Rating, MovieItemInfo } from '../../molecules';
import {
  MovieItemContainer,
  InfoWrapper,
  PosterImageStyled,
  TouchableBlock,
} from './movie-item.style';

interface Props {
  movie: Movie;
  showFavorite?: boolean;
  onPress: (movie: Movie) => void;
  onPressFavoriteAsync?: (movie: Movie) => Promise<void>;
}
export const MovieItem: React.FC<Props> = ({
  movie,
  showFavorite,
  onPress,
  onPressFavoriteAsync,
}) => {
  const handlePress = () => onPress(movie);
  const handlePressFavorteAsync = async () =>
    await onPressFavoriteAsync?.(movie);
  return (
    <TouchableBlock onPress={handlePress}>
      <Card>
        <PosterImageStyled posterPath={movie.posterPath} type="Small" />
        <MovieItemContainer>
          <InfoWrapper>
            <MovieItemInfo
              title={movie.title}
              releaseDate={movie.releaseDate}
              language={movie.originalLanguage}
            />
            {showFavorite && onPressFavoriteAsync && (
              <FavoriteButton
                favorite={!!movie.favorite}
                onPressAsync={handlePressFavorteAsync}
              />
            )}
          </InfoWrapper>
          <Rating rate={movie.voteAverage} />
        </MovieItemContainer>
      </Card>
    </TouchableBlock>
  );
};

MovieItem.defaultProps = {
  showFavorite: false,
};

export default MovieItem;
