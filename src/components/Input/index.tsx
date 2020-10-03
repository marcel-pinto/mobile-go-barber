import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const textColor = '#666360';

const Input: React.FC<InputProps> = ({ name, icon, ...otherProps }) => {
  const { registerField, fieldName, defaultValue = '', error } = useField(name);
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <Icon name={icon} size={20} color={textColor} />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark" // only ios
        placeholderTextColor={textColor}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...otherProps}
      />
    </Container>
  );
};

export default Input;
