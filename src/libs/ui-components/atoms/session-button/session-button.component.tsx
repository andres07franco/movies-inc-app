import React from 'react';
import { TouchableOpacity } from 'react-native';
import LoginCricleIcon from '@assets/login-circle.svg';
import ProfileCricleIcon from '@assets/profile-circle.svg';

interface Props {
  sessionStarted: boolean;
  onPress: () => void;
}
export const SessionButton: React.FC<Props> = ({ sessionStarted, onPress }) => {
  const handlePress = () => onPress();
  return (
    <TouchableOpacity onPress={handlePress}>
      {sessionStarted ? <ProfileCricleIcon /> : <LoginCricleIcon />}
    </TouchableOpacity>
  );
};

export default SessionButton;
