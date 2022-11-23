import { Box, Center, Flex, Icon, keyframes, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdThumbsUp, IoMdThumbsDown, IoIosHeart } from 'react-icons/io'
import { BsEmojiLaughingFill } from 'react-icons/bs'
const goUp = keyframes`
0%{
transform:translateY(6rem);
opacity:0.2;
}
100%{
  transform:translateY(0);
  opacity:1;
  }
 `
const bounce = keyframes`
0%{
transform:translateY(5px);
}
40%{
  transform:translateY(-5px);
  }
70%{
    transform:translateY(0);
}
100%{
    transform:translateY(0);
}
 `
const scale = keyframes`
0%{
transform:scale(0.8);
}
40%{
  transform:scale(1.05);
  }
50%{
transform:scale(.8);
}  
70%{
    transform:scale(1);}
100%{

    transform:scale(1);}
 `
const Like = () => {
  const [showReactions, SetShowReaction] = useState(false)
  const animationUp = goUp + ' .5s ease-in-out '
  const animationBounce = bounce + ' 1s ease-in-out infinite  '
  const animationScale = scale + ' 1s ease-in-out infinite  '
  return (
    <Center
      p=".5rem"
      flexBasis="50%"
      bg="gray.100"
      borderLeftRadius="lg"
      _hover={{ background: 'gray.200' }}
      transition="all .3s"
      cursor="pointer"
      position="relative"
      onMouseEnter={() => SetShowReaction(true)}
      onMouseLeave={() => SetShowReaction(false)}
    >
      <Text mx="auto" fontWeight="semibold">
        Like
      </Text>
      {showReactions && (
        <Flex
          position="absolute"
          top="-3.7rem"
          left="0"
          height="3.7rem"
          minW="5rem"
          animation={animationUp}
          background="white"
          rounded="full"
          gap=".8rem"
          alignItems="center"
          boxShadow="md"
          px=".4rem"
        >
          <Center
            role="group"
            rounded="full"
            w="2.8rem"
            h="2.8rem"
            bg="primary.500"
          >
            <Icon
              w="2rem"
              color="white"
              h="2rem"
              animation={animationBounce}
              as={IoMdThumbsUp}
            />
          </Center>
          <Center rounded="full" w="2.8rem" h="2.8rem" bg="red.500">
            <Icon
              w="2rem"
              h="2rem"
              color="white"
              as={IoIosHeart}
              animation={animationScale}
            />
          </Center>
          <Box>
            <Icon
              w="2.8rem"
              h="2.8rem"
              color="yellow.400"
              as={BsEmojiLaughingFill}
            />
          </Box>
          <Center rounded="full" w="2.8rem" h="2.8rem" bg="blackAlpha.500">
            <Icon w="2rem" h="2rem" color="white" as={IoMdThumbsDown} />
          </Center>
        </Flex>
      )}
    </Center>
  )
}

export default Like
