import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsEmojiLaughingFill } from 'react-icons/bs'
import { IoIosHeart, IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io'
import Pika from '../../../../components/pika/Pika'

import LikesNumber from './LikesNumber'
const listOfLikes = [
  {
    type: 'like',
    owner: 'ayoub sayah',
  },
  {
    type: 'like',
    owner: 'hedi sayah',
  },

  {
    type: 'love',
    owner: 'feryel zoghlami',
  },
  {
    type: 'laugh',
    owner: 'houssem gran',
  },
  {
    type: 'laugh',
    owner: 'yassine mrad',
  },
  {
    type: 'dislike',
    owner: 'takwa al Mekni',
  },
]
const ListOfLikes = () => {
  const [loveList, SetLoveList] = useState(
    listOfLikes.filter((like) => like.type === 'love')
  )
  const [likeList, SetLikeList] = useState(
    listOfLikes.filter((like) => like.type === 'like')
  )
  const [laughList, SetLaughList] = useState(
    listOfLikes.filter((like) => like.type === 'laugh')
  )
  const [dislikeList, SetDislikeList] = useState(
    listOfLikes.filter((like) => like.type === 'dislike')
  )
  return (
    <Flex alignItems="center" mt="1rem">
      <Center
        bg="primary.500"
        h="1.5rem"
        pos={'relative'}
        role="group"
        cursor="pointer"
        rounded="full"
        w="1.5rem"
      >
        <Icon as={IoMdThumbsUp} color="white" h="1rem" w="1rem" />
        <LikesNumber
          _groupHover={{
            display: 'block',
            visibility: 'visible',
          }}
          display="none"
          likeType="Like"
          listOfLikes={likeList}
        />
      </Center>
      <Center
        bg="red.500"
        h="1.5rem"
        ml="-.3rem"
        rounded="full"
        w="1.5rem"
        position="relative"
        role="group"
        cursor="pointer"
      >
        <Icon as={IoIosHeart} color="white" h="1rem" w="1rem" />
        <LikesNumber
          _groupHover={{
            display: 'block',
            visibility: 'visible',
          }}
          display="none"
          likeType="love"
          listOfLikes={loveList}
        />
      </Center>
      <Box
        h="1.5rem"
        ml="-.3rem"
        w="1.5rem"
        role="group"
        cursor="pointer"
        position="relative"
      >
        <Pika h="100%" w="100%" />
        <LikesNumber
          _groupHover={{
            display: 'block',
            visibility: 'visible',
          }}
          display="none"
          likeType="laugh"
          listOfLikes={laughList}
        />
      </Box>
      <Center
        bg="gray.700"
        h="1.5rem"
        ml="-.3rem"
        rounded="full"
        w="1.5rem"
        position="relative"
        role="group"
        cursor="pointer"
      >
        <Icon as={IoMdThumbsDown} color="white" h="1rem" w="1rem" />
        <LikesNumber
          _groupHover={{
            display: 'block',
            visibility: 'visible',
          }}
          display="none"
          likeType="dislike"
          listOfLikes={dislikeList}
        />
      </Center>
      <Text color="gray.500" fontSize="sm" ml=".5rem" textTransform="none">
        {listOfLikes.length} Person reacted to this post
      </Text>
      <Text ml="auto" color="gray.500" fontSize="sm">
        0 Comment
      </Text>
    </Flex>
  )
}

export default ListOfLikes
