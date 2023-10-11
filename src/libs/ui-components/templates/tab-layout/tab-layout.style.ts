import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';

export const Container = styled(View)`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
  background-color: ${({ theme }) => theme.primary10};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TabBar = styled(View)`
  background-color: ${({ theme }) => theme.primary10};
  flex-direction: row;
  justify-content: space-between;
`;

export const TabTitleContainer = styled(View)`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-grow: 1;
`;

export const ButtonContaner = styled(View)`
  margin-right: ${PixelRatio.roundToNearestPixel(10)}px;
  padding-top: ${Constants.statusBarHeight}px;
`;
