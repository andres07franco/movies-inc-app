import React from 'react';
import { MovieDetailScreen, MovieListScreen } from '@movies';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={MovieListScreen} />
      <Stack.Screen name="Details" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}
