import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%;
  align-items: flex-start;
  padding-horizontal: ${PixelRatio.roundToNearestPixel(30)}px;
  padding-vertical: ${PixelRatio.roundToNearestPixel(20)}px;
  text-align: 'left';
`;
