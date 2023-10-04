import React from 'react';
import { TouchableOpacity } from 'react-native';
import StarBig from '@assets/star-big.svg';
import { Container } from './rate-button.style';

interface Props {
  testID?: string;
  onPress: () => void;
}
export const RateButton: React.FC<Props> = ({ onPress, testID }) => {
  const handlePress = () => onPress();
  return (
    <TouchableOpacity testID={testID} onPress={handlePress}>
      <Container>
        <StarBig />
      </Container>
    </TouchableOpacity>
  );
};

RateButton.defaultProps = {
  testID: 'rate-button',
};

export default RateButton;
