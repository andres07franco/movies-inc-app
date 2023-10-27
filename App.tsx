import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@shared/hooks/use-theme.hook';
import '@shared/utils/i18n/init-transaltion.function';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider as StoreProvider } from 'react-redux';
import AppRoutes from 'src/app/app.routes';
import { store } from 'src/app/app.store';
import { AuthenticationRoutes } from '@authentication';

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <RootSiblingParent>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
          <AuthenticationRoutes />
        </RootSiblingParent>
      </StoreProvider>
    </ThemeProvider>
  );
}
