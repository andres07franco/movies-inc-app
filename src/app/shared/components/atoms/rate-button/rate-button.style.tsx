import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: ${PixelRatio.roundToNearestPixel(70)}px;
  height: ${PixelRatio.roundToNearestPixel(70)}px;
  border-radius: ${PixelRatio.roundToNearestPixel(35)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.quaternary10};
`;
