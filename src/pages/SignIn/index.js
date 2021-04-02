import React from 'react';
import { Button } from 'react-native';
import { useForm } from 'react-hook-form';
import { Container, LoginInput } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  login: Yup.number()
    .max(10, 'ID must be shorter than 10 characters')
    .required('This is required'),
});

function pages() {
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container>
        <LoginInput
          control={control}
          errors={errors}
          title="Login"
          name="login"
        />
      </Container>
      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </>
  );
}

export default pages;
