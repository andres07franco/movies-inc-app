import React from 'react';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

interface Props {
  type: 'Big' | 'Small';
  posterPath: string;
}
const PosterImage: React.FC<Props> = ({ type, posterPath }) => {
  let style = {
    width: Dimensions.get('screen').width,
    height: 300,
    marginTop: 0,
  };
  if (type === 'Small') {
    style = { width: 120, height: 170, marginTop: -25 };
  }
  return (
    <Image
      style={{
        ...style,
      }}
      source={{
        uri: posterPath,
      }}
    />
  );
};

export { PosterImage };
