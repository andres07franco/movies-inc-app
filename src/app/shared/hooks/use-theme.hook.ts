import { useColorScheme } from 'react-native';
import { DefaultTheme } from 'styled-components';
import { DarkColorConstant, LightColorConstant } from '@shared';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = (): DefaultTheme => {
    switch (colorScheme) {
      case 'light':
        return LightColorConstant;
      case 'dark':
        return DarkColorConstant;
      default:
        return DarkColorConstant;
    }
  };
  return {
    theme,
  };
};
