import React from 'react';
import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from '@translations';
import { Movie } from '@core/core.module';
import { useSessionSelector } from '@shared/redux/selectors';
import { showModal } from '@shared/redux/slices';
import { SessionButton, Tab } from '@ui-components/atoms';
import { TabLayout } from '@ui-components/templates';
import { MovieList } from '@ui-components/organisms';
import { RootStackParamList } from 'src/app/app.routes';
import {
  useGetNowPlaying,
  useGetFavorities,
  useAddFavorite,
} from '../../hooks';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'MovieDetailScreen'
  >;
}
const MovieListScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { sessionStarted } = useSessionSelector();
  const { movies, loading, getNowPlaying } = useGetNowPlaying();
  const { addFavorite } = useAddFavorite();
  const {
    movies: favoriteMovies,
    loading: favoriteLoading,
    getFavorities,
  } = useGetFavorities();

  const handelPressSession = () => {
    dispatch(showModal());
  };

  const handlePressMovie = (movie: Movie) => {
    navigation.navigate('MovieDetailScreen', { movie });
  };

  const handlePressFavorite = async (movie: Movie) => {
    await addFavorite(!movie.favorite, movie.id);
  };

  return (
    <TabLayout
      headerButton={
        <SessionButton
          onPress={handelPressSession}
          sessionStarted={sessionStarted ?? false}
        />
      }
    >
      <Tab title={t('TabNowtitle')}>
        <MovieList
          movies={movies}
          loading={loading}
          showFavoriteButton={sessionStarted}
          onRefresh={getNowPlaying}
          onPressMovie={handlePressMovie}
          onPressFavorite={handlePressFavorite}
        />
      </Tab>
      {sessionStarted && (
        <Tab title={t('Favorities')} onSelected={getFavorities}>
          <MovieList
            movies={favoriteMovies}
            loading={favoriteLoading}
            onRefresh={getFavorities}
            onPressMovie={handlePressMovie}
          />
        </Tab>
      )}
    </TabLayout>
  );
};

export { MovieListScreen };
