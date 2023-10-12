import React from 'react';
import { render } from '@testing-library/react-native';
import CastingList from './casting-list.component';
import { Casting } from '@core/core.module';

jest.mock('@translations', () => ({
  useTranslation: () => ({
    t: jest.fn((x: string) => x),
  }),
}));

const mockCasting = [
  {
    profilePath: '',
    name: 'Carlos',
    character: 'SuperMan',
    castId: 1,
  } as Casting,
  {
    profilePath: '',
    name: 'Carlos Andres Marriaga',
    character: 'Acuaman',
    castId: 1,
  } as Casting,
];

describe('<CastingList />', () => {
  it('renders correctly', () => {
    const tree = render(<CastingList casting={mockCasting} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show name and character simplified', () => {
    const { getByText } = render(<CastingList casting={mockCasting} />);
    expect(getByText('Carlos Andres')).toBeTruthy();
    expect(getByText('SuperMan')).toBeTruthy();
  });
});
