import React from 'react';
import { Typography } from '../../atoms';
import { Container } from './headline.style';

interface Props {
  text: string;
  colorType?: 'primary' | 'secondary';
}
export const Headline: React.FC<Props> = ({ text, colorType }) => {
  const color = colorType === 'primary' ? 'neutral100' : 'neutral90';
  return (
    <Container>
      <Typography type="Headline" color={color}>
        {text}
      </Typography>
    </Container>
  );
};

Headline.defaultProps = {
  colorType: 'primary',
};

export default Headline;
