import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from '@translations';
import { Movie } from '@core/core.module';
import { Headline } from '@ui-components/molecules';
import { MovieItem } from '@ui-components/organisms';
import { RootStackParamList } from 'src/app/app.routes';
import { useGetNowPlaying } from '../../hooks/use-get-now-playing.hook';
import { Container } from './movie-list.style';

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
