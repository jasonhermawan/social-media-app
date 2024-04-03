'use client';
import { Avatar, Button, Divider, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import PostCard from './components/PostCard';
import { useGetPostsQuery } from './api/useGetPostsQuery';
import BoxContainer from '@/components/cores/BoxContainer';
import { Formik } from 'formik';
import PostForm from './components/PostForm';
import { useCreatePostMutation } from './api/useCreatePostMutation';

const Feed = () => {
  const { mutate: mutateCreatePost } = useCreatePostMutation();
  const initialValues = {
    caption: '',
    file: undefined,
  };
  const { data: posts, refetch: refetchPost } = useGetPostsQuery();
  const printPostCards = () => {
    return posts.map((val: any, idx: number) => {
      return (
        <PostCard
          key={idx}
          caption={val.caption}
          picture={val.picture}
          image={`${process.env.NEXT_PUBLIC_BASE_API_URL}post-images/${val.picture}`}
        />
      );
    });
  };

  return (
    <Stack>
      <BoxContainer>
        <Text mb='20px' fw='600'>
          What is happening?
        </Text>
        <Flex gap='10px' w='100%'>
          <Avatar size='md' />
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              mutateCreatePost({
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
