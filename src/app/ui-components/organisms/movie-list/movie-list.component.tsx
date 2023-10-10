import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Movie } from '@core/core.module';
import { MovieItem } from '../movie-item/movie-item.component';

interface Props {
  movies: Movie[];
  showFavoriteButton: boolean;
  loading: boolean;
  onRefresh?: (() => void) | undefined;
  handlePressMovie: (movie: Movie) => void;
  onPressFavorite?: (movie: Movie) => void;
}
const MovieList: React.FC<Props> = ({
  movies,
  showFavoriteButton,
  loading,
  onRefresh,
  handlePressMovie,
  onPressFavorite,
}) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieItem
          movie={item}
          showFavorite={showFavoriteButton}
          onPress={handlePressMovie}
          onPressFavorite={onPressFavorite}
        />
      )}
      refreshControl={
        <RefreshControl
          tintColor="#fff"
          refreshing={loading}
          onRefresh={onRefresh}
        />
      }
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export { MovieList };
