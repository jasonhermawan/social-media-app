import BoxContainer from '@/components/cores/BoxContainer';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Text,
  TextInput,
} from '@mantine/core';
import React from 'react';
import {
  BiBookmark,
  BiComment,
  BiDotsHorizontal,
  BiHeart,
  BiShare,
} from 'react-icons/bi';

interface IPostCardProps {
  caption: string;
  image?: string;
  picture?: any;
}

const PostCard: React.FC<IPostCardProps> = ({ caption, image, picture }) => {
  return (
    <BoxContainer>
      <Flex align='center' justify='space-between'>
        <Flex align='center' gap='10px'>
          <Avatar />
          <Text size='16px' fw='600'>
            Jason Hermawan
          </Text>
          <Text size='14px'>@jasonhs</Text>
          <Text size='14px'>- 6h</Text>
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
          <Text color='gray' fw='500' size='14px'>
            0 Likes
          </Text>
        </Flex>
        <Flex align='center' gap='10px'>
          <BiComment size='22px' color='gray' />
          <Text color='gray' fw='500' size='14px'>
            0 Comments
          </Text>
        </Flex>
        <Flex align='center' gap='10px'>
          <BiShare size='22px' color='gray' />
          <Text color='gray' fw='500' size='14px'>
            0 Share
          </Text>
        </Flex>
        <Flex align='center' gap='10px'>
          <BiBookmark size='22px' color='gray' />
          <Text color='gray' fw='500' size='14px'>
            0 Saved
          </Text>
        </Flex>
      </Flex>
      <Divider color='#F3F3F3' />
      <Box mt='20px'>
        <Flex w='100%' gap='10px'>
          <Avatar />
          <TextInput
            w='100%'
            variant='filled'
            placeholder='Write your comment...'
          />
        </Flex>
      </Box>
    </BoxContainer>
  );
};

export default PostCard;
