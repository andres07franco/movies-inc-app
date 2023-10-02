import { Image, PixelRatio } from 'react-native';
import styled from 'styled-components';

export const PosterImage = styled(Image)`
  width: ${PixelRatio.roundToNearestPixel(120)}px;
  height: ${PixelRatio.roundToNearestPixel(170)}px;
  margin-top: -${PixelRatio.roundToNearestPixel(30)}px;
`;
