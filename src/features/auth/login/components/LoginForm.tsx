'use client';
import { FormInput } from '@/components/forms/FormInput';
import { ActionIcon, Button, Checkbox, Stack, Text } from '@mantine/core';
import { Form, useFormikContext } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
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
      <Stack gap='10px'>
        <FormInput name='email' label='Email' placeholder='john-doe@mail.com' />
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
        <Checkbox label='Remember me' />
      </Stack>
      <Button mt='30px' mb='15px' w='100%' type='submit'>
        Login
      </Button>
      <Text
        ta='center'
        fw='500'
        size='14px'
        style={{
          cursor: 'pointer',
        }}
        onClick={() => router.push('/register')}
      >
        Don't have account yet? Register
      </Text>
    </Form>
  );
};

export default LoginForm;
