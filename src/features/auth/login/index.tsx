'use client';
import { Box, Flex, Title } from '@mantine/core';
import { Formik } from 'formik';
import React from 'react';
import LoginForm from './components/LoginForm';
import { useLoginMutation } from '../api/useLoginMutation';
import { FormLoginSchema } from '../schemas/FormLoginSchema';

const Login = () => {
  const { mutateAsync: login } = useLoginMutation();
  const onSubmit = (values: any) => {
    login({
      email: values.email,
      password: values.password,
    });
  };
  return (
    <Flex h='100vh'>
      <Box bg='red' w='55%' display={{ base: 'none', md: 'block' }}></Box>
      <Flex
        w={{ base: '100%', md: '45%' }}
        align='center'
        justify='center'
        bg='white'
      >
        <Box w={{ base: '80%', sm: '60%' }}>
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
