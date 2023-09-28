import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'react-native';
import { Container } from './movie-detail.style';
import { useNavigation } from '@react-navigation/native';

export function MovieDetailScreen() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Text>Detail screen</Text>
      <StatusBar style="auto" />
      <Button title="Go Back" onPress={handlePress} />
    </Container>
  );
}
