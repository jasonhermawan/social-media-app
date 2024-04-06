'use client';
import BoxContainer from '@/components/cores/BoxContainer';
import { useGetCurrentAccountData } from '@/hooks/useGetCurrentAccountData';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
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
  name: string;
  username: string;
  avatar: any;
  image?: string;
  picture?: any;
}

const PostCard: React.FC<IPostCardProps> = ({
  caption,
  name,
  username,
  avatar,
  image,
  picture,
}) => {
  const router = useRouter();
  const user = useGetCurrentAccountData();
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
            0 Comments
          </Text>
          <Text color='gray' fw='500' size='14px' hiddenFrom='sm'>
            0
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
      <Box mt='20px'>
        <Flex w='100%' gap='10px'>
          <Avatar
            src={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${user.picture}`}
          />
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
