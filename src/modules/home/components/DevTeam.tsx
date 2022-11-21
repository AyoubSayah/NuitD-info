import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import feryel from '../../../assets/team/feryel.jpg'
import ayoub from '../../../assets/team/ayoub.png'
import mahmoud from '../../../assets/team/mahmoud.jpg'
import yassine from '../../../assets/team/yassine.jpg'
import elbou from '../../../assets/team/elbou.jpg'
import houssem from '../../../assets/team/houssem.jpg'
import AvatarProgress from '../../../components/avatar/avatar'
import { shuffleArray } from '../../../utils/utils'
const DevTeam = () => {
  const devs = [feryel, ayoub, mahmoud, yassine, elbou, houssem]
  return (
    <Box as="section" zIndex={15} position="relative" mt="5rem" mb="18rem">
      <Text
        as="h2"
        fontWeight="extrabold"
        fontSize="4xl"
        mt="12rem"
        textAlign="center"
        textTransform="capitalize"
        maxW={{ base: '100%', md: '50rem' }}
        mx="auto"
      >
        Our Dev Team
      </Text>
      <Text
        fontSize="2xl"
        maxW={{ base: '100%', md: '45rem' }}
        mx="auto"
        textAlign="center"
        textTransform="capitalize"
      >
        we are a team of 6 developers
      </Text>
      <Flex justifyContent="center" flexWrap="wrap" mt="6rem">
        {shuffleArray(devs).map((image: string, index) => (
          <AvatarProgress key={index} avatarUrl={image} size="12rem" />
        ))}
      </Flex>
    </Box>
  )
}

export default DevTeam
