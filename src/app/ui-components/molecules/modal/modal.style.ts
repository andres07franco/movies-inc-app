import { View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled(View)`
  background-color: #17162e;
  border-radius: 4px;
  align-items: center;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  width: 80%;
`;
