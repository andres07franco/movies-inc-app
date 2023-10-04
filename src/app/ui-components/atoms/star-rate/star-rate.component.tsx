import React from 'react';
import StartIcon from '@assets/star.svg';
import StartOutlineIcon from '@assets/star-outline.svg';
import StartBigIcon from '@assets/star-big.svg';
import StartOutlineBigIcon from '@assets/star-outline-big.svg';
import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
interface Props {
  filled: boolean;
  size?: 'small' | 'medium' | 'big';
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
export const StarRate: React.FC<Props> = ({ filled, size, onPress }) => {
  const styleFilled = { marginTop: 5, marginLeft: 5 };
  const styleOutline = { marginTop: 3, marginLeft: 5 };
  const containerStyle = { width: 20 };

  let Icon = StartIcon;
  let IconOutline = StartOutlineIcon;

  if (size === 'big') {
    Icon = StartBigIcon;
    IconOutline = StartOutlineBigIcon;
    containerStyle.width = 40;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={containerStyle}>
        {filled ? (
          <Icon style={styleFilled} />
        ) : (
          <IconOutline style={styleOutline} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

StarRate.defaultProps = {
  size: 'small',
  onPress: undefined,
};

export default StarRate;
