import React from 'react';
import { Typography } from '../../atoms';
import { Container } from './rating.style';

interface Props {
  rate: number;
}
export const Rating: React.FC<Props> = ({ rate }) => {
  return (
    <Container>
      <Typography type="BigValue" color="tertiary10">
        {rate}
      </Typography>
    </Container>
  );
};

export default Rating;
