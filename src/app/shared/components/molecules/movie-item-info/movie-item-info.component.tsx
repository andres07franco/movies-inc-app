import React from 'react';
import { Container, Detail, Title } from './movie-item-info.style';

interface Props {
  title: string;
  releaseDate: string;
  language: string;
}
export const MovieItemInfo: React.FC<Props> = ({
  title,
  releaseDate,
  language,
}) => {
  return (
    <Container>
      <Title type="Subtitle2" color="neutral100">
        {title}
      </Title>
      <Detail type="Caption" color="neutral90">
        Release date: {releaseDate}
      </Detail>
      <Detail type="Caption" color="neutral90">
        language: {language}
      </Detail>
    </Container>
  );
};

export default MovieItemInfo;
