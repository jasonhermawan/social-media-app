'use client';
import React, { useState } from 'react';
import { useGetPostsQuery } from '../feed/api/useGetPostsQuery';
import { Avatar, Box, Flex, Image, Stack, Text } from '@mantine/core';
import BoxContainer from '@/components/cores/BoxContainer';
import { useGetUsersQuery } from './api/useGetUsersQuery';
import PostCardWrapper from '../feed/components/PostCardWrapper';
import { useGetCurrentAccountData } from '@/hooks/useGetCurrentAccountData';
import EditProfilePicture from './components/EditProfilePicture';
import { Formik } from 'formik';
import { useUpdateProfilePictureMutation } from './api/useUpdateProfilePictureMutation';
import { BiEdit } from 'react-icons/bi';
import EditProfileBanner from './components/EditProfileBanner';
import { useUpdateProfileBannerMutation } from './api/useUpdateProfileBanner';

interface IAccountPageProps {
  username: string;
}

const Account: React.FC<IAccountPageProps> = ({ username }) => {
  const { data: posts } = useGetPostsQuery({
    username,
  });
  const { data: user } = useGetUsersQuery({
    username,
  });

  const { mutate: updateProfilePicture } = useUpdateProfilePictureMutation();
  const { mutate: updateProfileBanner } = useUpdateProfileBannerMutation();

  const currentAccount = useGetCurrentAccountData();

  const [editBannerModalOpened, setEditBannerModalOpened] =
    useState<boolean>(false);
  const [editProfileModalOpened, setEditProfileModalOpened] =
    useState<boolean>(false);

  const printPostCards = () => {
    return posts.map((val: any, idx: number) => {
      return <PostCardWrapper key={idx} postId={val.id} />;
    });
  };

  return (
    <Box>
      <Box w='80%'>
        <Box
          w='100%'
          bg='white'
          style={{
            borderRadius: '10px',
            boxShadow: '0 0 5px rgb(238, 238, 238)',
          }}
        >
          <Box
            bg='blue'
            h='180px'
            style={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            }}
            pos='relative'
          >
            {username === currentAccount.username ? (
              <Box w='35px' h='35px' pos='absolute' right='10px' top='10px'>
                <Flex
                  w='100%'
                  h='100%'
                  align='center'
                  justify='center'
                  bg='blue'
                  style={{ borderRadius: '50%', cursor: 'pointer' }}
                  onClick={() => setEditBannerModalOpened(true)}
                >
                  <BiEdit color='white' size='20px' />
                  <Formik
                    initialValues={{
                      banner: `${process.env.NEXT_PUBLIC_BASE_API_URL}user-banner-images/${user.banner}`,
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      updateProfileBanner({
                        ...values,
                      });
                      resetForm();
                      setSubmitting(false);
                      window.location.reload();
                    }}
                  >
                    <EditProfileBanner
                      opened={editBannerModalOpened}
                      close={() => setEditBannerModalOpened(false)}
                    />
                  </Formik>
                </Flex>
              </Box>
            ) : (
              <></>
            )}
            {user.banner ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-banner-images/${user.banner}`}
                style={{
                  height: '100%',
                  objectFit: 'cover',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
            ) : (
              <></>
            )}
          </Box>
          <Box p='20px'>
            <Flex align='center' gap='10px'>
              {username === currentAccount.username ? (
                <>
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    onClick={() => setEditProfileModalOpened(true)}
                    size='lg'
                    src={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${user.picture}`}
                  />
                  <Formik
                    initialValues={{
                      picture: `${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${user.picture}`,
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      updateProfilePicture({
                        ...values,
                      });
                      resetForm();
                      setSubmitting(false);
                      window.location.reload();
                    }}
                  >
                    <EditProfilePicture
                      opened={editProfileModalOpened}
                      close={() => setEditProfileModalOpened(false)}
                    />
                  </Formik>
                </>
              ) : (
                <Avatar
                  size='lg'
                  src={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${user.picture}`}
                />
              )}
              <Box>
                <Text fw='600' size='20px' mb='5px'>
                  {user.name}
                </Text>
                <Text color='gray' size='12px'>
                  @{user.username}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex mt='20px' gap='20px'>
          <Box w='30%'>
            <BoxContainer>
              <Text color='gray' fw='600'>
                Followers
              </Text>
              <Flex wrap='wrap' mt='20px'>
                <Avatar />
              </Flex>
            </BoxContainer>
          </Box>
          <Stack w='70%'>{printPostCards()}</Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Account;
