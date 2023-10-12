import React from 'react';

import Headline from './headline.component';
import { render } from '@testing-library/react-native';

describe('<Headline />', () => {
  it('renders correctly', () => {
    const tree = render(<Headline text="text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
