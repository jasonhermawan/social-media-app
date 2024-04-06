'use client';
import { Text } from '@mantine/core';
import React from 'react';
import PostCard from './PostCard';
import { useGetPostsQuery } from '../api/useGetPostsQuery';
import { useGetUsersQuery } from '@/features/account/api/useGetUsersQuery';

const PostCardWrapper = ({ postId }: { postId: string }) => {
  const { data: post, isLoading: isLoadingPost } = useGetPostsQuery({
    id: postId,
  });

  if (isLoadingPost) {
    return <Text>Loading...</Text>;
  }

  if (!post || post.length === 0) {
    return <Text>No post found</Text>;
  }

  const userId = post[0]?.userId;

  return <UserDetails userId={userId} post={post[0]} />;
};

const UserDetails = ({ userId, post }: { userId: string; post: any }) => {
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
    <PostCard
      name={users.name}
      username={users.username}
      avatar={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${users.picture}`}
      caption={post.caption}
      picture={post.picture}
      image={`${process.env.NEXT_PUBLIC_BASE_API_URL}post-images/${post.picture}`}
    />
  );
};

export default PostCardWrapper;
