import BoxContainer from '@/components/cores/BoxContainer';
import { Avatar, Box, Flex, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';
import { BiBookmark, BiComment, BiHeart } from 'react-icons/bi';

const PostCard = () => {
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
        <IconPlus size='16px' />
      </Flex>
      <Box mt='10px'>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sequi
          molestias ab quas harum fugiat possimus delectus ratione mollitia
          atque doloremque cupiditate non voluptatibus vero iusto dolor
          praesentium quae aliquid. Laboriosam cumque porro consequatur,
          quisquam excepturi in omnis! Quidem reprehenderit aliquam labore
          asperiores debitis aliquid error! Pariatur, in explicabo. Similique?
        </Text>
      </Box>
      <Flex mt='20px' gap='20px'>
        <BiHeart size='22px' />
        <BiComment size='22px' />
        <BiBookmark size='22px' />
      </Flex>
    </BoxContainer>
  );
};

export default PostCard;
