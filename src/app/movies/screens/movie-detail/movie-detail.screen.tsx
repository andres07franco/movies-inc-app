import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { PosterImage } from '@ui-components/atoms';
import { CastingList, MovieDetailInfo } from '@ui-components/molecules';
import { LoadingBlock } from '@ui-components/organisms';
import { useGetMovieById } from '../../hooks/use-get-movie-by-id.hook';
import { useGetCastingByMovie } from '../../hooks/use-get-casting-by-movie.hook';
import { Container } from './movie-detail.style';

interface Props {
  route: RouteProp<RootStackParamList, 'MovieDetailScreen'>;
}
const MovieDetailScreen: React.FC<Props> = ({ route }) => {
  const {
    movie: { id, posterPath },
  } = route.params;

  const { movie, loading } = useGetMovieById(id);
  const { casting } = useGetCastingByMovie(id);
  return (
    <Container>
      <StatusBar style="light" />
      <PosterImage type="Big" posterPath={posterPath} />
      <LoadingBlock loading={loading} overlap>
        <MovieDetailInfo movie={movie} />
      </LoadingBlock>
      <LoadingBlock loading={loading}>
        <CastingList casting={casting} />
      </LoadingBlock>
    </Container>
  );
};

export { MovieDetailScreen };
