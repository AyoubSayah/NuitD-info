import {
  Avatar,
  Box,
  Center,
  Collapse,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import Like from './Like'

const Post = () => {
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)
  return (
    <Box
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      p="1rem"
      background="white"
      w="36rem"
      maxW="100%"
      rounded="lg"
      textTransform="capitalize"
    >
      <Flex alignItems="center" gap=".5rem" mb="1rem">
        {' '}
        <Avatar name="ayoub sayah" />
        <Flex flexDir="column">
          <Text fontWeight="bold" my="0">
            Ayoub Sayah
          </Text>
          <Text fontSize="sm" my="0">
            30 October 18:11
          </Text>
        </Flex>
      </Flex>
      <Collapse startingHeight={40} in={show}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae
        voluptatibus exercitationem. Iusto ab dolore quis ipsum odio
        perspiciatis incidunt obcaecati velit. Repellendus, eum unde?
        Necessitatibus eum aut maxime accusamus!
      </Collapse>
      <Text
        cursor="pointer"
        _hover={{ textDecoration: 'underline' }}
        color="blue.500"
        onClick={handleToggle}
      >
        {show ? 'Show Less' : 'Show More'}
      </Text>{' '}
      <Box
        w="35rem"
        h="35rem"
        mt="1rem"
        maxW="100%"
        maxH="100%"
        background="gray.200"
        rounded="md"
      >
        <Image
          h="100%"
          objectFit="contain"
          src="https://www.nawpic.com/media/2020/bleach-nawpic-9.jpg"
          w="100%"
        />
      </Box>
      <Flex mt="1rem">
        <Like />
        <Divider
          orientation="vertical"
          ml="auto"
          borderWidth="2px"
          height="2.5rem"
          size="20px"
        />
        <Center
          p=".5rem"
          flexBasis="50%"
          bg="gray.100"
          borderRightRadius="lg"
          _hover={{ background: 'gray.200' }}
          transition="all .3s"
          cursor="pointer"
        >
          <Text fontWeight="semibold">Comment</Text>
        </Center>
      </Flex>
    </Box>
  )
}

export default Post
