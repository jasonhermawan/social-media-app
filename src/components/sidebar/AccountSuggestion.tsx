import React from 'react';
import { Avatar, Divider, Flex, Stack, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import BoxContainer from '../cores/BoxContainer';

const AccountSuggestion = () => {
  return (
    <BoxContainer>
      <Text fw='600' size='18px' mb='6px'>
        Who to follow
      </Text>
      <Divider mt='20px' />
      <Stack mt='20px' gap='20px'>
        <Flex justify='space-between' align='center'>
          <Flex align='center' gap='10px'>
            <Avatar size='35px' />
            <Text size='14px' fw='500'>
              John Mirota
            </Text>
          </Flex>
          <IconPlus size='14px' />
        </Flex>
        <Flex justify='space-between' align='center'>
          <Flex align='center' gap='10px'>
            <Avatar size='35px' />
            <Text size='14px' fw='500'>
              Louis Hamilton
            </Text>
          </Flex>
          <IconPlus size='14px' />
        </Flex>
        <Flex justify='space-between' align='center'>
          <Flex align='center' gap='10px'>
            <Avatar size='35px' />
            <Text size='14px' fw='500'>
              Kevin S
            </Text>
          </Flex>
          <IconPlus size='14px' />
        </Flex>
      </Stack>
    </BoxContainer>
  );
};

export default AccountSuggestion;
