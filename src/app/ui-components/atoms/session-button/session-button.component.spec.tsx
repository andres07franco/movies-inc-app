import React from 'react';
import { render } from '@testing-library/react-native';
import SessionButton from './session-button.component';

const mockOnPress = jest.fn();
const mockSession = {
  sessionStarted: true,
};

describe('<SessionButton />', () => {
  it('renders correctly', () => {
    const tree = render(
      <SessionButton
        sessionStarted={mockSession.sessionStarted}
        onPress={mockOnPress}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
