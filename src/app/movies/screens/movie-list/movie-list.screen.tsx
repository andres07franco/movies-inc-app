import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text } from 'react-native';
import { Container } from './movie-list.style';
import { useGetNowPlaying } from '@movies/hooks/use-get-now-playing.hook';

export function MovieListScreen() {
  const { movies } = useGetNowPlaying();
  return (
    <Container>
      <Text>List screen</Text>
      <StatusBar style="auto" />
      <FlatList
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
