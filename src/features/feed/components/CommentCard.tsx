'use client';
import { Avatar, Box, Flex, Image, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ICommentCardProps {
  avatar: any;
  username: string;
  caption: string;
  picture: string;
  image: string;
}

const CommentCard: React.FC<ICommentCardProps> = ({
  avatar,
  username,
  caption,
  picture,
  image,
}) => {
  const router = useRouter();
  return (
    <Flex gap='10px' align='start' mb='20px'>
      <Avatar
        src={avatar}
        onClick={() => router.push(`/account/${username}`)}
        style={{ cursor: 'pointer' }}
      />
      <Box bg='#F6F6F6' py='10px' px='15px' style={{ borderRadius: '5px' }}>
        <Text size='12px' fw='500' color='gray'>
          @{username}
        </Text>
        <Text mt='5px' size='14px'>
          {caption}
        </Text>
        {picture ? (
          <Box mt='10px' w='350px'>
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
    </Flex>
  );
};

export default CommentCard;
