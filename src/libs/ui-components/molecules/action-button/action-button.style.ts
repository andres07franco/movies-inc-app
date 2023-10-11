import {
  PixelRatio,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styled from 'styled-components/native';
import { Typography } from '../../atoms';

interface ContainerProps extends TouchableOpacityProps {
  buttonType: 'primary' | 'secondary' | 'link';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 50%;
  padding-horizontal: ${PixelRatio.roundToNearestPixel(20)}px;
  padding-vertical: ${PixelRatio.roundToNearestPixel(20)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ buttonType, theme }) => {
    switch (buttonType) {
      case 'primary':
        return theme.quaternary10;
      case 'secondary':
        return theme.primary40;
      default:
        return theme.quaternary10;
    }
  }};
`;

export const Text = styled(Typography)`
  font-weight: 600;
`;
