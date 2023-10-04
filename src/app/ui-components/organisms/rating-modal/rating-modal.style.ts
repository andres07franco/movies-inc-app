import { Typography } from '../../atoms';
import { PixelRatio, View } from 'react-native';
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

export const ModalBody = styled(View)`
  padding: 35px;
  align-items: center;
`;

export const Title = styled(Typography)`
  margin-bottom: ${PixelRatio.roundToNearestPixel(15)}px;
  text-align: center;
  font-weight: 600;
  margin-bottom: ${PixelRatio.roundToNearestPixel(20)}px;
`;

export const RateWrapper = styled(View)`
  flex-direction: row;
`;

export const ModalFooter = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
  padding-bottom: ${PixelRatio.roundToNearestPixel(25)}px;
  width: 100%;
`;
