import { View, PixelRatio, Dimensions } from 'react-native';
import styled from 'styled-components';

export const Block = styled(View)`
  padding-top: ${PixelRatio.roundToNearestPixel(30)}px;
  max-width: ${Dimensions.get('screen').width}px;
  padding-horizontal: ${PixelRatio.roundToNearestPixel(15)}px;
`;
