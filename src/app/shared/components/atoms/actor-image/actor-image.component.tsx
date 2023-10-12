import { Image, PixelRatio } from 'react-native';
import styled from 'styled-components';

export const ActorImage = styled(Image)`
  width: ${PixelRatio.roundToNearestPixel(70)}px;
  height: ${PixelRatio.roundToNearestPixel(70)}px;
  border-radius: 70px;
`;
