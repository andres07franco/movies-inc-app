import { Dimensions, PixelRatio, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { PosterImage } from '../../atoms';

export const MovieItemContainer = styled(View)`
  flex-direction: column;
  padding: ${PixelRatio.roundToNearestPixel(20)}px;
  padding-right: ${PixelRatio.roundToNearestPixel(0)}px;
  flex-grow: 1;
`;

export const InfoWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const PosterImageStyled = styled(PosterImage)`
  margin-top: -25px;
`;

export const TouchableBlock = styled(TouchableOpacity)`
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
  min-width: ${Dimensions.get('screen').width}px;
  max-width: ${Dimensions.get('screen').width}px;
`;
