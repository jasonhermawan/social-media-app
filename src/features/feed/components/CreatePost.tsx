import React from 'react';
import { Avatar, Box, Button, Divider, Flex, Text } from '@mantine/core';
import BoxContainer from '@/components/cores/BoxContainer';
import Textbox from '@/components/cores/Textbox';
import { IconPhoto } from '@tabler/icons-react';

const CreatePost = () => {
  return (
    <BoxContainer>
      <Text mb='10px'>What is happening?</Text>
      <Flex gap='10px'>
        <Avatar size='md' />
        <Box w='100%'>
          <Textbox
            name='post-textbox'
            placeholder='Write here'
            autosize
            minRows={2}
            maxRows={8}
            variant='none'
          />
          <Divider />
          <Flex align='center' mt='10px' justify='space-between'>
            <Flex align='center' gap='5px'>
              <IconPhoto />
              <Text size='14px' fw='500'>
                Add media
              </Text>
            </Flex>
            <Button>Post</Button>
          </Flex>
        </Box>
      </Flex>
    </BoxContainer>
  );
};

export default CreatePost;
