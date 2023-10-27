import React from 'react';
import { StarRate } from '../../atoms';
import { Container, RateText } from './rating.style';

interface Props {
  rate: number;
}
export const Rating: React.FC<Props> = ({ rate }) => {
  return (
    <Container>
      <RateText type="BigValue" color="tertiary10">
        {rate}
      </RateText>
      <StarRate filled={rate >= 2} />
      <StarRate filled={rate >= 4} />
      <StarRate filled={rate >= 6} />
      <StarRate filled={rate >= 8} />
      <StarRate filled={rate >= 10} />
    </Container>
  );
};

export default Rating;
