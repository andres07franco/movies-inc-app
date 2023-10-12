import { Typography } from '../../atoms';
import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: column;
  flex-grow: 1;
  padding-top: ${PixelRatio.roundToNearestPixel(20)}px;
`;

export const Title = styled(Typography)`
  padding-bottom: ${PixelRatio.roundToNearestPixel(10)}px;
`;

export const Detail = styled(Typography)<{ textAlign: 'left' | 'right' }>`
  padding-top: ${PixelRatio.roundToNearestPixel(5)}px;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`;

export const RateButtonContent = styled(View)`
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  margin-top: -${PixelRatio.roundToNearestPixel(50)}px;
`;
