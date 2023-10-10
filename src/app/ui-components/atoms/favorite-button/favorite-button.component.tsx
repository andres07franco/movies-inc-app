import React from 'react';
import FavoriteIcon from '@assets/favorite.svg';
import FavoriteOutlineIcon from '@assets/favorite-outline.svg';
import { TouchableOpacity } from 'react-native';

interface Props {
  favorite: boolean;
  onPress: () => void;
}
export const FavoriteButton: React.FC<Props> = ({ favorite, onPress }) => {
  const handlePress = () => onPress();
  return (
    <TouchableOpacity onPress={handlePress}>
      {favorite ? <FavoriteIcon /> : <FavoriteOutlineIcon />}
    </TouchableOpacity>
  );
};

export default FavoriteButton;
