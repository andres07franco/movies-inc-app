import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import { Container } from './movie-list.style';
import { useGetNowPlaying } from '@movies/hooks/use-get-now-playing.hook';
import Headline from '@ui-components/molecules/headline/headline.component';
import MovieItem from '@ui-components/organisms/movie-item/movie-item.component';
import { Movie } from '@core/core.module';
import { RootStackParamList } from 'src/app/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from '@shared';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'MovieDetailScreen'
  >;
}
const MovieListScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const { movies } = useGetNowPlaying();
  const handlePressMovie = (movie: Movie) => {
    navigation.navigate('MovieDetailScreen', { movie });
  };
  return (
    <Container>
      <StatusBar style="light" />
      <Headline text={t('TabNowtitle')} />
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieItem movie={item} onPress={handlePressMovie} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export { MovieListScreen };
