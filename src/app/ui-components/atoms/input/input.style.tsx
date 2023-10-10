import { PixelRatio, TextInput } from 'react-native';
import styled from 'styled-components';

export interface Props {
  hasError: boolean;
}

export const TextInputStyled = styled(TextInput)<Props>`
  width: ${PixelRatio.roundToNearestPixel(270)}px;
  height: ${PixelRatio.roundToNearestPixel(40)}px;
  border-radius: ${PixelRatio.roundToNearestPixel(4)}px;
  background-color: ${({ theme }) => theme.neutral100};
  border-width: 1px;
  margin-horizontal: 0px;
  margin-bottom: 0px;
  padding: 8px;
`;
