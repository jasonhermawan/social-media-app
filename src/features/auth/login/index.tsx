'use client';
import { Box, Flex, Title } from '@mantine/core';
import { Formik } from 'formik';
import React from 'react';
import LoginForm from './components/LoginForm';
import { useLoginMutation } from '../api/useLoginMutation';
import { FormLoginSchema } from '../schemas/FormLoginSchema';

const Login = () => {
  const { mutateAsync: mutateLogin } = useLoginMutation();
  const onSubmit = (values: any) => {
    mutateLogin({
      email: values.email,
      password: values.password,
    });
  };
  return (
    <Flex h='100vh'>
      <Box bg='red' w='55%'></Box>
      <Flex w='45%' align='center' justify='center' bg='white'>
        <Box w='60%'>
          <Title mb='20px'>Welcome back!</Title>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={onSubmit}
            validationSchema={FormLoginSchema}
          >
            <LoginForm />
          </Formik>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
