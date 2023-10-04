import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';
import { PosterImage } from '../../atoms';

export const Container = styled(View)`
  flex-direction: column;
  padding: ${PixelRatio.roundToNearestPixel(20)}px;
`;

export const PosterImageStyled = styled(PosterImage)`
  margin-top: -25px;
`;
