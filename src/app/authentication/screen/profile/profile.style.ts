import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';
import { Typography } from '@ui-components/atoms';

export const Detail = styled(Typography)`
  margin-top: ${PixelRatio.roundToNearestPixel(15)}px;
  text-align: center;
  font-weight: 600;
`;

export const Wrapper = styled(View)`
  flex-direction: column;
  align-items: center;
`;
