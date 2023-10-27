import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Card = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.primary40};
  border-radius: ${PixelRatio.roundToNearestPixel(5)}px;
  margin: ${PixelRatio.roundToNearestPixel(15)}px;
  margin-bottom: ${PixelRatio.roundToNearestPixel(20)}px;
  padding-bottom: ${PixelRatio.roundToNearestPixel(15)}px;
  padding-left: ${PixelRatio.roundToNearestPixel(15)}px;
  padding-right: ${PixelRatio.roundToNearestPixel(20)}px;
`;
