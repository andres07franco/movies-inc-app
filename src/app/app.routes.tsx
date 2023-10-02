import React from 'react';
import { MovieDetailScreen, MovieListScreen } from '@movies';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Movie } from '@core/core.module';

export type RootStackParamList = {
  MovieListScreen: undefined;
  MovieDetailScreen: {
    movie: Movie;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="MovieListScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="MovieListScreen"
        component={MovieListScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MovieDetailScreen"
        component={MovieDetailScreen}
      />
    </Stack.Navigator>
  );
}
