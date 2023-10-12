import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Movie } from '@core';
import { MovieDetailScreen, MovieListScreen } from './screens';

export type MovieStakParamList = {
  MovieListScreen: undefined;
  MovieDetailScreen: {
    movie: Movie;
  };
};

const Stack = createNativeStackNavigator<MovieStakParamList>();

export const Routes = [
  <Stack.Screen
    key="MovieListScreen"
    options={{ headerShown: false }}
    name="MovieListScreen"
    component={MovieListScreen}
  />,
  <Stack.Screen
    key="MovieDetailScreen"
    options={{ headerShown: false }}
    name="MovieDetailScreen"
    component={MovieDetailScreen}
  />,
];
