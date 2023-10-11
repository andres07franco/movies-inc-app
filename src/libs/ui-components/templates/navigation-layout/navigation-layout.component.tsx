import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../atoms';

import {
  Container,
  StyledScrollView,
} from './navigation-layout.component.style';

interface Props {
  children: JSX.Element | (boolean | JSX.Element)[] | boolean;
}
const NavigationLayout: React.FC<Props> = ({ children }) => {
  const navigation = useNavigation();
  return (
    <StyledScrollView>
      <Container>
        <StatusBar style="light" />
        <BackButton onPress={() => navigation.goBack()} />
        {children}
      </Container>
    </StyledScrollView>
  );
};

export { NavigationLayout };
