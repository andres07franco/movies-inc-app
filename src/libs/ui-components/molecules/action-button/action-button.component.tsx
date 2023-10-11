import React, { useEffect, useState } from 'react';
import { Container, Text } from './action-button.style';
import { ActivityIndicator } from 'react-native';

interface Props {
  testID?: string;
  title: string;
  type: 'primary' | 'secondary' | 'link';
  disabled?: boolean;
  onPress?: () => void;
  onPressAsync?: () => Promise<void>;
}
export const ActionButton: React.FC<Props> = ({
  testID,
  title,
  type,
  disabled,
  onPress,
  onPressAsync,
}) => {
  const [asyncDisabled, setAsyncDisabled] = useState(false);

  const handlePress = (): void => {
    if (onPressAsync) {
      setAsyncDisabled(true);
    }
    if (onPress) {
      onPress();
    }
  };

  useEffect(() => {
    if (asyncDisabled && onPressAsync) {
      onPressAsync()
        .then(() => setAsyncDisabled(false))
        .catch(() => setAsyncDisabled(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncDisabled]);

  const textColor = disabled ? 'neutral90' : 'neutral100';
  return (
    <Container
      {...{ buttonType: type }}
      testID={testID}
      disabled={asyncDisabled || disabled}
      onPress={handlePress}
    >
      {asyncDisabled ? (
        <ActivityIndicator />
      ) : (
        <Text type="Subtitle" color={textColor}>
          {title}
        </Text>
      )}
    </Container>
  );
};

ActionButton.defaultProps = {
  testID: 'acction-button',
};

export default ActionButton;
