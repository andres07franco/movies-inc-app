import { PixelRatio, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';

export const Container = styled(View)`
  width: ${PixelRatio.roundToNearestPixel(60)}px;
  height: ${PixelRatio.roundToNearestPixel(60)}px;
  border-radius: ${PixelRatio.roundToNearestPixel(30)}px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const TouchableOpacityStyled = styled(TouchableOpacity)`
  position: absolute;
  padding-top: ${Constants.statusBarHeight}px;
  left: 20px;
  z-index: 9;
`;
