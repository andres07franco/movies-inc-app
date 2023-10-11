import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@assets/favorite.svg';
import FavoriteOutlineIcon from '@assets/favorite-outline.svg';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useTheme } from '@shared/hooks/use-theme.hook';

interface Props {
  favorite: boolean;
  onPressAsync: () => Promise<void>;
}
export const FavoriteButton: React.FC<Props> = ({ favorite, onPressAsync }) => {
  const { theme } = useTheme();
  const [asyncDisabled, setAsyncDisabled] = useState(false);
  const FavIcon = favorite ? FavoriteIcon : FavoriteOutlineIcon;

  const handlePress = (): void => {
    setAsyncDisabled(true);
  };

  useEffect(() => {
    if (asyncDisabled) {
      onPressAsync()
        .then(() => setAsyncDisabled(false))
        .catch(() => setAsyncDisabled(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncDisabled]);

  return (
    <TouchableOpacity disabled={asyncDisabled} onPress={handlePress}>
      {asyncDisabled ? (
        <ActivityIndicator color={theme().neutral100} />
      ) : (
        <FavIcon />
      )}
    </TouchableOpacity>
  );
};

export default FavoriteButton;
