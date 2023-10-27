import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%;
  align-items: flex-start;
  padding-horizontal: ${PixelRatio.roundToNearestPixel(30)}px;
  padding-top: ${PixelRatio.roundToNearestPixel(20)}px;
  padding-bottom: ${PixelRatio.roundToNearestPixel(15)}px;
  text-align: 'left';
`;
