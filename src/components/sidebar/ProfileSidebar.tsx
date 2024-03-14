import { Avatar, Box, Divider, Flex, Stack, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import React from 'react';
import BoxContainer from '../cores/BoxContainer';

const ProfileSidebar = () => {
  return (
    <BoxContainer>
      <Flex align='center' gap='10px'>
        <Avatar size='lg' />
        <Box>
          <Text fw='600' size='18px' mb='6px'>
            Jason Hermawan
          </Text>
          <Text color='gray' fw='500' size='14px'>
            @jasonhs
          </Text>
        </Box>
      </Flex>
      <Divider mt='20px' />
      <Stack mt='20px' gap='20px'>
        <Flex justify='space-between' align='center'>
          <Text size='14px' fw='500'>
            Joined
          </Text>
          <Text size='14px'>a minute ago</Text>
        </Flex>
        <Flex justify='space-between' align='center'>
          <Text size='14px' fw='500'>
            Status
          </Text>
          <Text size='14px'>Verified</Text>
        </Flex>
      </Stack>
      <Divider mt='20px' />
      <Stack mt='20px' gap='20px'>
        <Flex justify='space-between' align='center'>
          <Text size='14px' fw='500'>
            Friend Request
          </Text>
          <Flex align='center' gap='10px'>
            <Text size='14px'>25</Text>
            <IconChevronRight size='16px' />
          </Flex>
        </Flex>
        <Flex justify='space-between' align='center'>
          <Text size='14px' fw='500'>
            Your Friends
          </Text>
          <Flex align='center' gap='10px'>
            <Text size='14px'>25</Text>
            <IconChevronRight size='16px' />
          </Flex>
        </Flex>
        <Flex justify='space-between' align='center'>
          <Text size='14px' fw='500'>
            Your Following
          </Text>
          <Flex align='center' gap='10px'>
            <Text size='14px'>25</Text>
            <IconChevronRight size='16px' />
          </Flex>
        </Flex>
      </Stack>
    </BoxContainer>
  );
};

export default ProfileSidebar;
