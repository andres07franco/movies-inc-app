import React from 'react';
import { MovieListScreen } from './movie-list.screen';
import { Movie } from '@core/core.module';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/app/app.routes';
import { fireEvent, render } from '@testing-library/react-native';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('@shared/hooks/use-theme.hook', () => ({
  useTheme: jest.fn(() => ({
    theme: () => ({ neutral100: '#ffffff' }),
  })),
}));

jest.mock('@shared/redux/selectors', () => ({
  useSessionSelector: jest.fn(() => ({
    sessionStarted: true,
  })),
}));

jest.mock('../../hooks', () => ({
  useGetNowPlaying: () => ({
    movies: [
      {
        title: 'AVENGERS',
        id: 1,
        posterPath: '',
        voteAverage: 10,
        releaseDate: '2023-09-07',
      },
      {
        title: 'TRANSFORMERS',
        id: 2,
        posterPath: '',
        voteAverage: 10,
        releaseDate: '2023-09-07',
      },
    ],
  }),
  useGetFavorities: () => ({
    movies: [],
  }),
  useAddFavorite: () => ({ addFavorite: jest.fn() }),
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
  navigate: mockNavigateFn,
} as unknown as NativeStackNavigationProp<
  RootStackParamList,
  'MovieDetailScreen'
>;

describe('<MovieListScreen />', () => {
  it('renders correctly', () => {
    const tree = render(
      <MovieListScreen navigation={navigationMock} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should navigate to MovieDetailScreen when press on a item', () => {
    const { getByText } = render(
      <MovieListScreen navigation={navigationMock} />,
    );
    const item = getByText('AVENGERS');
    fireEvent.press(item);
    expect(mockNavigateFn).toBeCalledWith('MovieDetailScreen', {
      movie: {
        title: 'AVENGERS',
        id: 1,
        posterPath: '',
        voteAverage: 10,
        releaseDate: '2023-09-07',
      },
    });
  });

  it('should render two items', () => {
    const { queryAllByText } = render(
      <MovieListScreen navigation={navigationMock} />,
    );
    const items = queryAllByText('language:');
    expect(items).toHaveLength(2);
  });
});
