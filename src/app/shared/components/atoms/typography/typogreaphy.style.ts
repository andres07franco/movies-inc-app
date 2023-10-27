import styled, { DefaultTheme } from 'styled-components/native';
import { Text as NativeText } from 'react-native';

export interface TextProps {
  type:
    | 'Headline'
    | 'Title'
    | 'Subtitle'
    | 'Subtitle2'
    | 'Value'
    | 'BigValue'
    | 'Caption'
    | 'Link';
  color: keyof DefaultTheme;
}

export const Text = styled(NativeText)<TextProps>`
  color: ${({ color, theme }) => theme[color]};
  font-size: ${({ type }) => {
    switch (type) {
      case 'Headline':
        return 25;
      case 'Title':
        return 30;
      case 'Subtitle':
        return 20;
      case 'Subtitle2':
        return 18;
      case 'Value':
        return 18;
      case 'BigValue':
        return 22;
      case 'Caption':
        return 12;
      default:
        return 15;
    }
  }}px;
  font-weight: ${({ type }) => {
    switch (type) {
      case 'Value':
      case 'BigValue':
        return 'normal';
      default:
        return 'normal';
    }
  }};
`;
