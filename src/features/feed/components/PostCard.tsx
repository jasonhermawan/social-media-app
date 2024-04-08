'use client';
import BoxContainer from '@/components/cores/BoxContainer';
import { useGetCurrentAccountData } from '@/hooks/useGetCurrentAccountData';
import { Avatar, Box, Divider, Flex, Image, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  BiBookmark,
  BiComment,
  BiDotsHorizontal,
  BiHeart,
  BiShare,
} from 'react-icons/bi';
import { useGetPostCommentsQuery } from '../api/useGetPostCommentsQuery';
import CommentCardWrapper from './CommentCardWrapper';
import { Formik } from 'formik';
import CommentForm from './CommentForm';
import { useCreatePostCommentMutation } from '../api/useCreatePostCommentMutation';

interface IPostCardProps {
  postId: string;
  caption: string;
  name: string;
  username: string;
  avatar: any;
  image?: string;
  picture?: any;
}

const PostCard: React.FC<IPostCardProps> = ({
  postId,
  caption,
  name,
  username,
  avatar,
  image,
  picture,
}) => {
  const router = useRouter();
  const user = useGetCurrentAccountData();
  const { data: comments } = useGetPostCommentsQuery({
    postid: postId,
  });

  const { mutate: createComment } = useCreatePostCommentMutation({
    postid: postId,
  });
  const initialValues = {
    caption: '',
    file: undefined,
  };

  const printPostComments = () => {
    return comments.map((val: any, idx: number) => {
      return <CommentCardWrapper key={idx} commentId={val.id} />;
    });
  };

  return (
    <BoxContainer>
      <Flex align='center' justify='space-between'>
        <Flex
          align='center'
          gap='10px'
          style={{ cursor: 'pointer' }}
          onClick={() => router.push(`/account/${username}`)}
        >
          <Avatar src={avatar} />
          <Stack gap='8px'>
            <Flex align='center' gap='10px'>
              <Text size='16px' fw='600'>
                {name}
              </Text>
              <Text size='12px' color='gray'>
                6h ago
              </Text>
            </Flex>
            <Text size='12px' color='gray'>
              @{username}
            </Text>
          </Stack>
        </Flex>
        <BiDotsHorizontal />
      </Flex>
      <Box mt='20px'>
        <Text mb='20px'>{caption}</Text>
        {picture ? (
          <Box>
            <Image
              src={image}
              style={{ height: '100%', borderRadius: '10px' }}
              alt={picture}
            />
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Divider mt='20px' color='#F3F3F3' />
      <Flex gap='20px' my='20px' justify='space-between'>
        <Flex align='center' gap='10px'>
          <BiHeart size='22px' color='gray' />
          <Text color='gray' fw='500' size='14px' visibleFrom='sm'>
            0 Likes
          </Text>
          <Text color='gray' fw='500' size='14px' hiddenFrom='sm'>
            0
          </Text>
        </Flex>
        <Flex align='center' gap='10px'>
          <BiComment size='22px' color='gray' />
          <Text color='gray' fw='500' size='14px' visibleFrom='sm'>
            {comments.length} Comments
          </Text>
          <Text color='gray' fw='500' size='14px' hiddenFrom='sm'>
            {comments.length}
          </Text>
        </Flex>
        <Flex align='center' gap='10px'>
          <BiShare size='22px' color='gray' />
          <Text color='gray' fw='500' size='14px' visibleFrom='sm'>
            0 Share
          </Text>
          <Text color='gray' fw='500' size='14px' hiddenFrom='sm'>
            0
          </Text>
        </Flex>
        <Flex align='center' gap='10px'>
          <BiBookmark size='22px' color='gray' />
          <Text color='gray' fw='500' size='14px' visibleFrom='sm'>
            0 Saved
          </Text>
          <Text color='gray' fw='500' size='14px' hiddenFrom='sm'>
            0
          </Text>
        </Flex>
      </Flex>
      <Divider color='#F3F3F3' />
      <Box mt='20px'>{printPostComments()}</Box>
      <Box mt='20px'>
        <Flex w='100%' gap='10px'>
          <Avatar
            src={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${user.picture}`}
          />
          <Box w='100%'>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                createComment({
                  ...values,
                });
                resetForm();
                setSubmitting(false);
                window.location.reload();
              }}
            >
              <CommentForm />
            </Formik>
          </Box>
        </Flex>
      </Box>
    </BoxContainer>
  );
};

export default PostCard;
