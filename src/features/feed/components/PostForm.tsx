'use client';
import { PreviewImages } from '@/components/cores/PreviewImage';
import FormTextbox from '@/components/forms/FormTextbox';
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
} from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import { Form, useFormikContext } from 'formik';
import React from 'react';

const PostForm = () => {
  const { values, handleSubmit, setFieldValue } = useFormikContext<IPostForm>();
  return (
    <Box w='100%'>
      <Form onSubmit={handleSubmit}>
        <FormTextbox
          name='caption'
          placeholder='Write here'
          autosize
          minRows={2}
          maxRows={8}
          variant='none'
          value={values.caption}
        />
        {values.file ? (
          <Box my='20px' w={{base: '100%', lg: '50%'}}>
            <PreviewImages
              fileImage={values.file}
              onRemoveImage={() => setFieldValue('file', undefined)}
            />
          </Box>
        ) : (
          <></>
        )}
        <Divider />
        <Flex align='center' mt='10px' justify='space-between'>
          <Box w='50%'>
            <Input
              style={{ display: 'none' }}
              id='file'
              type='file'
              onChange={(e) => setFieldValue('file', e.target.files)}
            />
            {values.file ? (
              <></>
            ) : (
              <label htmlFor='file'>
                <Flex align='center' gap='5px'>
                  <IconPhoto />
                  <Text size='14px' fw='500'>
                    Add media
                  </Text>
                </Flex>
              </label>
            )}
          </Box>

          <Button type='submit'>Post</Button>
        </Flex>
      </Form>
    </Box>
  );
};

export default PostForm;
