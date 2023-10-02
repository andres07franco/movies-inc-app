import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: column;
  padding: ${PixelRatio.roundToNearestPixel(20)}px;
`;
