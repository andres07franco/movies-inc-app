import React from 'react';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

interface Props {
  type: 'Big' | 'Small';
  posterPath: string;
}
const PosterImage: React.FC<Props> = (props: Props) => {
  let styleCustom = {
    width: Dimensions.get('screen').width,
    height: 300,
  };
  if (props.type === 'Small') {
    styleCustom = { width: 120, height: 170 };
  }
  return (
    <Image
      {...props}
      width={styleCustom.width}
      height={styleCustom.height}
      source={{
        uri: props.posterPath,
      }}
    />
  );
};

export { PosterImage };
