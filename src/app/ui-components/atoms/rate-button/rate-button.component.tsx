import React from 'react';
import { TouchableOpacity } from 'react-native';
import StarBig from '@assets/star-big.svg';
import { Container } from './rate-button.style';

interface Props {
  onPress: () => void;
}
export const RateButton: React.FC<Props> = ({ onPress }) => {
  const handlePress = () => onPress();
  return (
    <TouchableOpacity onPress={handlePress}>
      <Container>
        <StarBig />
      </Container>
    </TouchableOpacity>
  );
};

export default RateButton;
