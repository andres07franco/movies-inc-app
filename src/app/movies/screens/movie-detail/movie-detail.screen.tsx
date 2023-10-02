import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Dimensions } from 'react-native';
import { Container } from './movie-detail.style';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { Image } from 'react-native';
import { Card } from '@ui-components/atoms/card/card.component';
import MovieDetailInfo from '@ui-components/molecules/movie-detail-info/movie-detail-info.component';
import { Block } from '@ui-components/atoms/block/block.component';
import { useGetMovieById } from '@movies/hooks/use-get-movie-by-id.hook';
import { useGetCastingByMovie } from '@movies/hooks/use-get-casting-by-movie.hook';
import CastingList from '@ui-components/molecules/casting/casting-list.component';

interface Props {
  route: RouteProp<RootStackParamList, 'MovieDetailScreen'>;
}
const MovieDetailScreen: React.FC<Props> = ({ route }) => {
  const {
    movie: { id, posterPath },
  } = route.params;

  const { movie } = useGetMovieById(id);
  const { casting } = useGetCastingByMovie(id);
  return (
    <Container>
      <Image
        style={{
          width: Dimensions.get('screen').width,
          height: 300,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/original${posterPath}`,
        }}
      />
      <Block>
        <Card style={{ marginTop: -80, width: '100%' }}>
          {!movie ? <ActivityIndicator /> : <MovieDetailInfo movie={movie} />}
        </Card>
      </Block>

      <Block>
        <Card style={{ marginTop: -30, width: '100%' }}>
          {!casting ? <ActivityIndicator /> : <CastingList casting={casting} />}
        </Card>
      </Block>

      <StatusBar style="auto" />
    </Container>
  );
};

export { MovieDetailScreen };
