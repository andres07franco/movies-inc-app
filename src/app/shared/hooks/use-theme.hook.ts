import { useColorScheme } from 'react-native';
import { DefaultTheme } from 'styled-components';
import { ColorConstant } from '@shared';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = (): DefaultTheme => {
    switch (colorScheme) {
      case 'light':
        return ColorConstant.light;
      case 'dark':
        return ColorConstant.dark;
      default:
        return ColorConstant.dark;
    }
  };
  return {
    theme,
  };
};
