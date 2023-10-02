import React from 'react';
import { Container } from './rating.style';
import Typography from '@ui-components/atoms/typography/typography.component';

interface Props {
  rate: number;
}
const Rating: React.FC<Props> = ({ rate }) => {
  return (
    <Container>
      <Typography type="BigValue" color="tertiary10">
        {rate}
      </Typography>
    </Container>
  );
};

export default Rating;
