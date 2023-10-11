import React from 'react';
import BackIcon from '@assets/back.svg';
import { Container, TouchableOpacityStyled } from './back-button.style';

interface Props {
  onPress: () => void;
}
export const BackButton: React.FC<Props> = ({ onPress }) => {
  const handlePress = () => onPress();
  const marginFixStyle = { marginLeft: -4 };
  return (
    <TouchableOpacityStyled onPress={handlePress}>
      <Container>
        <BackIcon style={marginFixStyle} />
      </Container>
    </TouchableOpacityStyled>
  );
};

export default BackButton;
