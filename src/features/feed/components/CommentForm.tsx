'use client';
import { PreviewImages } from '@/components/cores/PreviewImage';
import { FormInput } from '@/components/forms/FormInput';
import { Box, Button, Flex, Input } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import { Form, useFormikContext } from 'formik';
import React from 'react';

const CommentForm = () => {
  const { values, handleSubmit, setFieldValue } =
    useFormikContext<ICommentForm>();
  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Flex align='center' gap='10px'>
          <FormInput
            w='100%'
            name='caption'
            placeholder='Write your comment...'
            value={values.caption}
            variant='filled'
          />
          {values.file ? (
            <></>
          ) : (
            <>
              <Input
                style={{ display: 'none' }}
                id='comment-file'
                type='file'
                onChange={(e) => setFieldValue('file', e.target.files)}
              />
              <label htmlFor='comment-file'>
                <IconPhoto color='gray' />
              </label>
            </>
          )}
        </Flex>
        <Flex justify='space-between' mt='10px'>
          <Box w='350px'>
            <PreviewImages
              fileImage={values.file}
              onRemoveImage={() => setFieldValue('file', undefined)}
            />
          </Box>
          {values.caption || values.file ? (
            <Button
              type='submit'
              disabled={values.caption || values.file ? false : true}
            >
              Submit
            </Button>
          ) : (
            <></>
          )}
        </Flex>
      </Form>
    </Box>
  );
};

export default CommentForm;
