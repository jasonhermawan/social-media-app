'use client';
import { Box, Flex, Title } from '@mantine/core';
import { Formik } from 'formik';
import React from 'react';
import RegisterForm from './components/RegisterForm';
import { useRegisterMutation } from '../api/useRegisterMutation';
import { FormRegisterSchema } from '../schemas/FormRegisterSchema';

const Register = () => {
  const { mutateAsync: register } = useRegisterMutation();
  const onSubmit = (values: any) => {
    register({
      email: values.email,
      name: values.name,
      username: values.username,
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
          <Title mb='20px'>Register Account</Title>
          <Formik
            initialValues={{
              email: '',
              name: '',
              username: '',
              password: '',
            }}
            onSubmit={onSubmit}
            validationSchema={FormRegisterSchema}
          >
            <RegisterForm />
          </Formik>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Register;
