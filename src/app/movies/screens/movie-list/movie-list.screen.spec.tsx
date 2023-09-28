import React from 'react';
import renderer from 'react-test-renderer';
import { MovieListScreen } from './movie-list.screen';

jest.mock('@movies/hooks/useGetNowPlaying', () => ({
  useGetNowPlaying: () => ({
    movies: [
      {
        title: 'AVENGERS',
        id: 1,
      },
    ],
  }),
}));

describe('<MovieListScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MovieListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
