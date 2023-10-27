import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Headline } from '../../molecules';
import { Container } from './basic-layout.style';

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[] | boolean;
}
const BasicLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <StatusBar style="light" />
      <Headline text={title} />
      {children}
    </Container>
  );
};

export { BasicLayout };
