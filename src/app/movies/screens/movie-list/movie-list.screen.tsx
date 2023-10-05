import React from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from '@translations';
import { Movie } from '@core/core.module';
import { Tab } from '@ui-components/atoms';
import { TabLayout } from '@ui-components/templates';
import { MovieItem } from '@ui-components/organisms';
import { RootStackParamList } from 'src/app/app.routes';
import { useGetNowPlaying } from '../../hooks';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'MovieDetailScreen'
  >;
}
const MovieListScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const { movies, loading, getNowPlaying } = useGetNowPlaying();
  const handlePressMovie = (movie: Movie) => {
    navigation.navigate('MovieDetailScreen', { movie });
  };
  return (
    <TabLayout>
      <Tab title={t('TabNowtitle')}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <MovieItem movie={item} onPress={handlePressMovie} />
          )}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getNowPlaying} />
          }
          keyExtractor={(item) => item.id.toString()}
        />
      </Tab>
      <Tab title="Favorities">
        <Text>hola</Text>
      </Tab>
    </TabLayout>
  );
};

export { MovieListScreen };
