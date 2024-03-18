'use client';
import { FormInput } from '@/components/forms/FormInput';
import { ActionIcon, Button, Stack, Text } from '@mantine/core';
import { Form, useFormikContext } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { handleSubmit } = useFormikContext();
  return (
    <Form
      onSubmit={handleSubmit}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleSubmit();
      }}
    >
      <Stack>
        <FormInput name='email' placeholder='john-doe@mail.com' label='Email' />
        <FormInput name='username' placeholder='johndoe' label='Username' />
        <FormInput
          name='password'
          label='Password'
          placeholder='Input your password'
          type={showPassword ? 'text' : 'password'}
          rightSection={
            <ActionIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </ActionIcon>
          }
        />
      </Stack>
      <Button mt='30px' mb='15px' w='100%' type='submit'>
        Register
      </Button>
      <Text
        ta='center'
        fw='500'
        size='14px'
        style={{
          cursor: 'pointer',
        }}
        onClick={() => router.push('/login')}
      >
        ALready have an account? Login
      </Text>
    </Form>
  );
};

export default RegisterForm;
