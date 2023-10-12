import React from 'react';
import { render } from '@testing-library/react-native';
import { Movie } from '@core';
import MovieDetailBlock from './movie-detail-block.component';

jest.mock('@translations', () => ({
  useTranslation: () => ({
    t: jest.fn((x: string) => x),
  }),
}));

const mockMovie = {
  title: 'AVENGERS',
  id: 1,
  posterPath: '',
  overview: 'movie overview',
  voteAverage: 10,
  releaseDate: '2023-09-07',
  genres: [{ name: 'Comedy' }, { name: 'Action' }],
  adult: false,
} as unknown as Movie;

const mockPressRate = jest.fn();

describe('<MovieDetailBlock />', () => {
  it('renders correctly', () => {
    const tree = render(
      <MovieDetailBlock movie={mockMovie} onPressRate={mockPressRate} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show title, vote average, year, overview, genders,  and clasification', () => {
    const { getByText } = render(
      <MovieDetailBlock movie={mockMovie} onPressRate={mockPressRate} />,
    );
    expect(getByText('AVENGERS')).toBeTruthy();
    expect(getByText('10')).toBeTruthy();
    expect(getByText('movie overview')).toBeTruthy();
    expect(getByText('GenersLabel: Comedy, Action')).toBeTruthy();
    expect(getByText('ReleaseYearLabel: 2023')).toBeTruthy();
    expect(getByText('GeneralAudienceText')).toBeTruthy();
  });

  it('should show Adults clasification', () => {
    mockMovie.adult = true;
    const { getByText } = render(
      <MovieDetailBlock movie={mockMovie} onPressRate={mockPressRate} />,
    );
    expect(getByText('AdultsText')).toBeTruthy();
  });
});
