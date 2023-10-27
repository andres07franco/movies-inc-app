import { View, ScrollView } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.primary10};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledScrollView = styled(ScrollView)`
  background-color: ${({ theme }) => theme.primary10};
`;
