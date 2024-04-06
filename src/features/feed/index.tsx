'use client';
import { Avatar, Button, Divider, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import { useGetPostsQuery } from './api/useGetPostsQuery';
import BoxContainer from '@/components/cores/BoxContainer';
import { Formik } from 'formik';
import PostForm from './components/PostForm';
import { useCreatePostMutation } from './api/useCreatePostMutation';
import PostCardWrapper from './components/PostCardWrapper';
import { useGetCurrentAccountData } from '@/hooks/useGetCurrentAccountData';

const Feed = () => {
  const user = useGetCurrentAccountData();
  const { mutate: createPost } = useCreatePostMutation();
  const initialValues = {
    caption: '',
    file: undefined,
  };
  const { data: posts, refetch: refetchPost } = useGetPostsQuery();

  const printPostCards = () => {
    return posts.map((val: any, idx: number) => {
      return <PostCardWrapper key={idx} postId={val.id} />;
    });
  };

  return (
    <Stack>
      <BoxContainer>
        <Text mb='20px' fw='600'>
          What is happening?
        </Text>
        <Flex gap='10px' w='100%'>
          <Avatar
            size='md'
            src={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${user.picture}`}
          />
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              createPost({
                ...values,
              });
              resetForm();
              setSubmitting(false);
              refetchPost();
              window.location.reload();
            }}
          >
            <PostForm />
          </Formik>
        </Flex>
      </BoxContainer>
      <Divider mt='20px' />
      <Flex py='20px' gap='10px'>
        <Button>All</Button>
        <Button variant='light'>Friends</Button>
        <Button variant='light'>Following</Button>
      </Flex>
      {printPostCards()}
    </Stack>
  );
};

export default Feed;
