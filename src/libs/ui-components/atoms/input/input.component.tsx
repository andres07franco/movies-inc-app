import React from 'react';
import { Control, useController } from 'react-hook-form';
import { TextInputStyled } from './input.style';
import { TextInputProps } from 'react-native';

interface Props {
  name: string;
  control: Control<any>;
  secureTextEntry?: boolean;
  required?: boolean;
}
const Input: React.FC<TextInputProps & Props> = (props) => {
  const { name, control, required, secureTextEntry } = props;
  const { field } = useController({
    control,
    defaultValue: '',
    name,
    rules: { required },
  });
  return (
    <TextInputStyled
      {...props}
      value={field.value}
      onChangeText={field.onChange}
      secureTextEntry={secureTextEntry}
    />
  );
};

Input.defaultProps = {
  secureTextEntry: false,
  required: false,
};

export { Input };
