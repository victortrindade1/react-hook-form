import React from 'react';
import { TextInput, Text } from 'react-native';
import { Controller } from 'react-hook-form';
// import { TInput } from './styles';

const Input = ({ control, errors, title, name, ...props }) => {
  // console.log(errors);
  return (
    <>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder={title}
            onBlur={onBlur}
            onChangeText={item => onChange(item)}
            value={value}
            {...props}
          />
        )}
        name={name}
        // rules={{ required: true }}
        defaultValue=""
      />
      {errors[name] && <Text>{errors[name].message}</Text>}
    </>
  );
};

export default Input;
