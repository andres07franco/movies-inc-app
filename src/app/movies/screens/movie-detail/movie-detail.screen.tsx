import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { PosterImage } from '@ui-components/atoms';
import { Movie } from '@core';
import { RatingModal } from '@ui-components/organisms';
import { LoadingSection } from '@ui-components/molecules';
import {
  CastingList,
  MovieCarousel,
  MovieDetailBlock,
} from '@ui-components/organisms';
import { NavigationLayout } from '@ui-components/templates';
import {
  useGetSimilars,
  useAddRating,
  useGetMovieById,
  useGetCastingByMovie,
  useGetRecomendations,
} from '../../hooks';

interface Props {
  route: RouteProp<RootStackParamList, 'MovieDetailScreen'>;
}
const MovieDetailScreen: React.FC<Props> = ({ route }) => {
  const {
    movie: { id, posterPath },
  } = route.params;

  const { movie, loading, fetchMovie } = useGetMovieById(id);
  const { movies: similars, loading: loadingSimilars } = useGetSimilars(id);
  const { movies: recomendations, loading: loadingRecomendations } =
    useGetRecomendations(id);

  const { casting } = useGetCastingByMovie(id);
  const { addRating } = useAddRating();
  const [modalVisible, setModalVisible] = useState(false);

  const handlePressRate = (_: Movie) => {
    setModalVisible(true);
  };

  const handlePressSaveRate = async (rate: number) => {
    await addRating(rate, movie?.id ?? 0, () => {
      setModalVisible(false);
      fetchMovie().then();
    });
  };

  return (
    <NavigationLayout>
      <PosterImage type="Big" posterPath={posterPath} />
      <LoadingSection loading={loading} overlap>
        <MovieDetailBlock movie={movie} onPressRate={handlePressRate} />
      </LoadingSection>
      <LoadingSection loading={loading}>
        <CastingList casting={casting} />
      </LoadingSection>
      {similars.length > 0 && (
        <LoadingSection loading={loadingSimilars}>
          <MovieCarousel title="similarsTile" movies={similars} />
        </LoadingSection>
      )}
      {recomendations.length > 0 && (
        <LoadingSection loading={loadingRecomendations}>
          <MovieCarousel title="recomendationsTile" movies={recomendations} />
        </LoadingSection>
      )}
      <RatingModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onSaveRateAsync={handlePressSaveRate}
      />
    </NavigationLayout>
  );
};

export { MovieDetailScreen };
