import { View, PixelRatio, Dimensions } from 'react-native';
import styled from 'styled-components';

export const Block = styled(View)`
  padding-top: ${PixelRatio.roundToNearestPixel(30)}px;
  min-width: ${Dimensions.get('screen').width}px;
  max-width: ${Dimensions.get('screen').width}px;
`;
