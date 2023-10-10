import { PixelRatio } from 'react-native';
import styled from 'styled-components/native';
import { Typography, Input } from '../../atoms';

export const Label = styled(Typography)`
  text-align: left;
  font-weight: 600;
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
  padding-bottom: ${PixelRatio.roundToNearestPixel(20)}px;
`;

export interface InputProps {
  hasError: boolean;
}
export const InputStyled = styled(Input)<InputProps>`
  border-color: ${({ hasError, theme }) =>
    hasError ? theme.error : theme.primary40};
`;

export const ErrorText = styled(Typography)`
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
`;
