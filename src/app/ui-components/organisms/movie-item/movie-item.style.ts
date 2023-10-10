import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';
import { PosterImage } from '../../atoms';

export const Container = styled(View)`
  flex-direction: column;
  padding: ${PixelRatio.roundToNearestPixel(20)}px;
  padding-right: ${PixelRatio.roundToNearestPixel(0)}px;
  flex-grow: 1;
`;

export const InfoWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const PosterImageStyled = styled(PosterImage)`
  margin-top: -25px;
`;
