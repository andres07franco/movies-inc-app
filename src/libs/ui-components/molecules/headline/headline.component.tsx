import React from 'react';
import { Container } from './headline.style';
import Typography from '@ui-components/atoms/typography/typography.component';

interface Props {
  text: string;
}
const Headline: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Typography type="Headline" color="neutral100">
        {text}
      </Typography>
    </Container>
  );
};

export default Headline;
