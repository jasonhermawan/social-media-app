'use client'
import { Box, Flex, Title } from '@mantine/core';
import { Formik } from 'formik';
import React from 'react';
import RegisterForm from './components/RegisterForm';
import { useRegisterMutation } from '../api/useRegisterMutation';
import { FormRegisterSchema } from '../schemas/FormRegisterSchema';

const Register = () => {
  const { mutateAsync: mutateRegister } = useRegisterMutation();
  const onSubmit = (values: any) => {
    mutateRegister({
      email: values.email,
      username: values.username,
      password: values.password,
    });
  };
  return (
    <Flex h='100vh'>
      <Box bg='red' w='55%'></Box>
      <Flex w='45%' align='center' justify='center' bg='white'>
        <Box w='60%'>
          <Title mb='20px'>Register Account</Title>
          <Formik
            initialValues={{
              email: '',
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
