import React from 'react';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

interface Props {
  type: 'Big' | 'Small';
  posterPath: string;
}
const PosterImage: React.FC<Props> = ({ type, posterPath }) => {
  let style = { width: 120, height: 170 };
  if (type === 'Big') {
    style = { width: Dimensions.get('screen').width, height: 310 };
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
