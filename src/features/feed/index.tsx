import { Button, Divider, Flex, Stack } from '@mantine/core';
import React from 'react';
import CreatePost from './components/CreatePost';
import PostCard from './components/PostCard';

const Feed = () => {
  return (
    <Stack>
      <CreatePost />
      <Divider mt='20px' />
      <Flex
        py='20px'
        gap='10px'
        pos='sticky'
        top='0px'
        bg='rgb(243, 241, 237)'
        style={{ zIndex: '9999' }}
      >
        <Button>All</Button>
        <Button variant='light'>Friends</Button>
        <Button variant='light'>Following</Button>
      </Flex>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Stack>
  );
};

export default Feed;
