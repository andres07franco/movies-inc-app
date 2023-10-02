import React from 'react';
import { Container, Detail, Title } from './movie-detail-info.style';
import { Movie } from '@core/core.module';
import Rating from '../rating/rating.component';
import { useTranslation } from '@shared';

interface Props {
  movie: Movie;
}
// genders,clasification,  actors and characters
const MovieDetailInfo: React.FC<Props> = ({ movie }) => {
  const { t } = useTranslation();
  const year = movie.releaseDate.split('-')[0];
  const genres = movie.genres.map((x) => x.name).join(', ');
  const voteAverage = parseFloat(movie.voteAverage.toFixed(1));
  const clasification = movie.adult ? t('Adults') : t('GeneralAudienceText');
  return (
    <Container>
      <Title type="Subtitle" color="neutral100">
        {movie.title}
      </Title>
      <Rating rate={voteAverage} />
      <Detail type="Caption" color="neutral90">
        {t('ReleaseYearLabel')}: {year}
      </Detail>
      <Detail type="Caption" color="neutral90">
        {movie.overview}
      </Detail>
      {movie.genres.length > 0 && (
        <Detail type="Caption" color="neutral90">
          {t('GenersLabel')}: {genres}
        </Detail>
      )}
      <Detail type="Caption" color="neutral90" textAlign="right">
        {clasification}
      </Detail>
    </Container>
  );
};

export default MovieDetailInfo;
