import React from 'react';
import { Typography } from '../../atoms';
import { Container } from './headline.style';

interface Props {
  text: string;
}
export const Headline: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Typography type="Headline" color="neutral100">
        {text}
      </Typography>
    </Container>
  );
};

export default Headline;
