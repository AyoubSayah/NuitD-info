/* eslint-disable */

import { Box, chakra, Flex, shouldForwardProp, Text } from '@chakra-ui/react'
import React from 'react'
import feryel from '../../../assets/team/feryel.jpg'
import ayoub from '../../../assets/team/ayoub.png'
import mahmoud from '../../../assets/team/mahmoud.jpg'
import yassine from '../../../assets/team/yassine.jpg'
import elbou from '../../../assets/team/elbou.jpg'
import houssem from '../../../assets/team/houssem.jpg'
import haroon from '../../../assets/team/haroon.jpg'

import { shuffleArray } from '../../../utils/utils'
import UseInView from '../../../utils/hooks/UseInView'
import { motion, isValidMotionProp } from 'framer-motion'
import AvatarProgress from '../../../components/avatar/Avatar'
const DevTeam = () => {
  const devs = [feryel, ayoub, mahmoud, yassine, elbou, houssem, haroon]
  const { ref, controls } = UseInView()

  const ChakraDiv = chakra(motion.section, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  return (
    <ChakraDiv
      initial={{ y: 400, opacity: 0 }}
      ref={ref}
      animate={controls}
      zIndex={15}
      position="relative"
      mb="18rem"
    >
      <Text
        as="h2"
        fontWeight="extrabold"
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        mt="19rem"
        textAlign="center"
        textTransform="capitalize"
        maxW={{ base: '100%', md: '50rem' }}
        mx="auto"
      >
        Our Dev Team
      </Text>
      <Text
        fontSize={{ base: 'lg', md: '2xl' }}
        maxW={{ base: '100%', md: '45rem' }}
        mx="auto"
        textAlign="center"
        textTransform="capitalize"
      >
        we are a team of 7 developers
      </Text>
      <Flex justifyContent="center" flexWrap="wrap" mt="6rem">
        {shuffleArray(devs).map((image: string, index) => (
          <AvatarProgress key={index} avatarUrl={image} size="12rem" />
        ))}
      </Flex>
    </ChakraDiv>
  )
}

export default DevTeam
