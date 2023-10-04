import { View } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';

export const Container = styled(View)`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
  background-color: ${({ theme }) => theme.primary10};
  align-items: center;
  justify-content: center;
`;
