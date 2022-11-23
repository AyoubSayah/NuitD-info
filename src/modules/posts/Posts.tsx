import { Center } from '@chakra-ui/react'
import React from 'react'
import Post from './components/Post/Post'

const Posts = () => {
  return (
    <Center zIndex={15} position="relative" mt="4rem">
      <Post />
    </Center>
  )
}

export default Posts
