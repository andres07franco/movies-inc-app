import React from 'react';
import renderer from 'react-test-renderer';
import Typography from './typography.component';

describe('<Typography />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Typography type={'Headline'} color={'neutral100'}>
          text
        </Typography>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
