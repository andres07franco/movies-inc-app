import { View } from 'react-native';
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
  justify-content: flex-start;
`;
