import React from 'react';
import renderer from 'react-test-renderer';
import Headline from './headline.component';

describe('<Headline />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Headline text={'text'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
