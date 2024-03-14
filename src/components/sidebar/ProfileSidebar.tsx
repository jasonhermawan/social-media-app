import { Avatar, Box, Flex, Stack, Text } from '@mantine/core'
import React from 'react'

const ProfileSidebar = () => {
  return (
   <Box bg='white'>
    <Flex>
      <Avatar />
      <Stack>
        <Text>Jason</Text>
        <Text>@jasonhs</Text>
      </Stack>
    </Flex>
   </Box>
  )
}

export default ProfileSidebar