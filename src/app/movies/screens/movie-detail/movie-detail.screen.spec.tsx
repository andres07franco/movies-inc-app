import React from 'react';
import { RootStackParamList } from 'src/app/app.routes';
import { fireEvent, render } from '@testing-library/react-native';
import { MovieDetailScreen } from './movie-detail.screen';
import { RouteProp } from '@react-navigation/native';

const mockFetchMovie = jest.fn();
const mockAddRating = jest.fn(
  (rate: number, id: number, callback: () => VoidFunction) => {
    callback();
  },
);
const mockMovies = [
  {
    title: 'TRANSFORMERS',
    id: 2,
    posterPath: '',
  },
];
const mockCasting = [
  { castId: 1, profilePath: '', name: 'carlos', character: 'andres' },
];
jest.mock('../../hooks', () => ({
  useGetMovieById: () => ({
    movie: {
      title: 'AVENGERS',
      id: 1,
      posterPath: '',
      overview: 'movie overview',
      voteAverage: 10,
      releaseDate: '2023-09-07',
      genres: [{ name: 'Coemdy' }],
    },
    loading: false,
    fetchMovie: mockFetchMovie,
  }),
  useAddRating: () => ({
    addRating: mockAddRating,
  }),
  useGetCastingByMovie: jest.fn(() => ({
    casting: mockCasting,
  })),
  useGetSimilars: jest.fn(() => ({
    movies: mockMovies,
    loading: false,
  })),
  useGetRecomendations: jest.fn(() => ({
    movies: mockMovies,
    loading: false,
  })),
}));

jest.mock('@translations', () => ({
  useTranslation: () => ({
    t: jest.fn((x: string) => x),
  }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const routeMock = {
  params: {
    movie: {
      id: 1,
      posterPath: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
    },
  },
} as unknown as RouteProp<RootStackParamList, 'MovieDetailScreen'>;

describe('<MovieDetailScreen />', () => {
  it('renders correctly', () => {
    const tree = render(<MovieDetailScreen route={routeMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should open modal to rate movie', () => {
    const { getByTestId } = render(<MovieDetailScreen route={routeMock} />);
    const rateButton = getByTestId('rate-button');
    fireEvent.press(rateButton);

    const modal = getByTestId('rating-modal');
    expect(modal.props.visible).toBe(true);
  });

  it('should call to add rating', () => {
    const { getByTestId } = render(<MovieDetailScreen route={routeMock} />);
    const rateButton = getByTestId('rate-button');
    fireEvent.press(rateButton);

    const starRate = getByTestId('star-rate-4');
    fireEvent.press(starRate);

    const saveRateButton = getByTestId('save-rate-button');
    fireEvent.press(saveRateButton);

    expect(mockAddRating).toBeCalled();
  });

  it('should hide recomendations and similar when they are empty', () => {
    mockMovies.pop();
    const { queryByText } = render(<MovieDetailScreen route={routeMock} />);
    const similarsTile = queryByText('similarsTile');
    const recomendationsTile = queryByText('recomendationsTile');

    expect(similarsTile).toBeFalsy();
    expect(recomendationsTile).toBeFalsy();
  });
});
