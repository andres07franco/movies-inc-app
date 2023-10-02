import React from 'react';
import renderer from 'react-test-renderer';
import { MovieListScreen } from './movie-list.screen';
import { Movie } from '@core/core.module';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/app/app.routes';

jest.mock('../../hooks/use-get-now-playing.hook', () => ({
  useGetNowPlaying: () => ({
    movies: [
      {
        title: 'AVENGERS',
        id: 1,
        posterPath: '',
        voteAverage: 10,
        releaseDate: '2023-09-07',
      },
    ],
  }),
}));

jest.mock('@translations', () => ({
  useTranslation: () => ({
    t: jest.fn((x: string) => x),
  }),
}));

const mockNavigateFn = jest.fn((screen: string, params: { movie: Movie }) => ({
  screen,
  params,
}));

const navigationMock = {
  navigation: {
    navigate: mockNavigateFn,
  },
} as unknown as NativeStackNavigationProp<
  RootStackParamList,
  'MovieDetailScreen'
>;

describe('<MovieListScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MovieListScreen navigation={navigationMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
