import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLoadSessionEffect } from '@authentication/hooks';
import { MovieStakParamList, Routes as MovieRoutes } from '@movies';

export type RootStackParamList = MovieStakParamList;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  useLoadSessionEffect();
  return (
    <Stack.Navigator initialRouteName="MovieListScreen">
      {MovieRoutes}
    </Stack.Navigator>
  );
}
