import React from 'react';
import { Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { Container TInput } from './styles';

const Input = ({ control, errors, title, name, style, ...props }) => {
  /**
   * Passando style como parâmetro pro container e pro Input faz com q
   * estilizemos ambos juntos. Posso mudar fonte do texto, como posso mudar cor
   * do background, no mesmo styled component. Não sei ainda se há implicações,
   * mas funcionou
   */

  return (
    <Container style={style}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TInput
            // style={style} (até pode, mas vai pegar o msm css do container)
            placeholder={title}
            onBlur={onBlur}
            onChangeText={(item) => onChange(item)}
            value={value}
            {...props}
          />
        )}
        name={name}
        // rules={{ required: true }}
        defaultValue=""
      />
      {errors[name] && <Text>{errors[name].message}</Text>}
    </Container>
  );
};

export default Input;
