import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const ModalFooter = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
  padding-bottom: ${PixelRatio.roundToNearestPixel(25)}px;
  width: 100%;
`;
