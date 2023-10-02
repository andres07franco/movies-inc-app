import Typography from '@ui-components/atoms/typography/typography.component';
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
