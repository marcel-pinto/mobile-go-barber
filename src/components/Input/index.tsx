import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const textColor = '#666360';

const Input: React.FC<InputProps> = ({ name, icon, ...otherProps }) => (
  <Container>
    <Icon name={icon} size={20} color={textColor} />
    <TextInput
      keyboardAppearance="dark" // only ios
      placeholderTextColor={textColor}
      {...otherProps}
    />
  </Container>
);

export default Input;
