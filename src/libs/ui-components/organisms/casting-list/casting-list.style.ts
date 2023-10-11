import { Typography } from '../../atoms';
import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: column;
  flex-grow: 1;
  padding-top: ${PixelRatio.roundToNearestPixel(20)}px;
`;

export const Content = styled(View)`
  flex-direction: column;
  align-items: center;
  padding-horizontal: ${PixelRatio.roundToNearestPixel(10)}px;
  width: ${PixelRatio.roundToNearestPixel(90)}px;
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
`;

export const Title = styled(Typography)<{
  textAlign: 'left' | 'right' | 'center';
}>`
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
  padding-bottom: ${PixelRatio.roundToNearestPixel(5)}px;
`;

export const Detail = styled(Typography)<{ textAlign: 'left' | 'right' }>`
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`;
