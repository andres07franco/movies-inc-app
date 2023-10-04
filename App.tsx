import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { Provider, createStore } from 'jotai';
import AppRoutes from 'src/app/app.routes';
import { useTheme } from '@shared/hooks/use-theme.hook';
import '@shared/utils/i18n/init-transaltion.function';
import { RootSiblingParent } from 'react-native-root-siblings';

const store = createStore();

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootSiblingParent>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </RootSiblingParent>
      </Provider>
    </ThemeProvider>
  );
}
