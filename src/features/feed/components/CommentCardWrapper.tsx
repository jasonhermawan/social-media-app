'use client';
import { Text } from '@mantine/core';
import React from 'react';
import { useGetUsersQuery } from '@/features/account/api/useGetUsersQuery';
import { useGetPostCommentsQuery } from '../api/useGetPostCommentsQuery';
import CommentCard from './CommentCard';

const CommentCardWrapper = ({ commentId }: { commentId: string }) => {
  const { data: comment, isLoading: isLoadingComment } =
    useGetPostCommentsQuery({
      id: commentId,
    });

  if (isLoadingComment) {
    return <Text>Loading...</Text>;
  }

  if (!comment || comment.length === 0) {
    return <Text>No comment found</Text>;
  }

  const userId = comment[0]?.userId;

  return <UserDetails userId={userId} comment={comment[0]} />;
};

const UserDetails = ({ userId, comment }: { userId: string; comment: any }) => {
  const { data: users, isLoading: isLoadingUser } = useGetUsersQuery({
    id: userId,
  });

  if (isLoadingUser) {
    return <Text>Loading...</Text>;
  }

  if (!users) {
    return <Text>No user found</Text>;
  }

  return (
    <CommentCard
      username={users.username}
      avatar={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${users.picture}`}
      caption={comment.caption}
      picture={comment.picture}
      image={`${process.env.NEXT_PUBLIC_BASE_API_URL}post-comment-images/${comment.picture}`}
    />
  );
};

export default CommentCardWrapper;
