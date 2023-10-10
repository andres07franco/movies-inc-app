import { Typography } from '../../atoms';
import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Detail = styled(Typography)`
  margin-bottom: ${PixelRatio.roundToNearestPixel(15)}px;
  text-align: center;
  font-weight: 600;
  margin-bottom: ${PixelRatio.roundToNearestPixel(20)}px;
`;

export const RateWrapper = styled(View)`
  flex-direction: row;
`;
