import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../components/logo/Logo'

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="primary.500"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap="2rem"
      py="4rem"
      zIndex={15}
      position="relative"
    >
      <Text
        fontWeight="bold"
        fontSize="xl"
        color="white"
        textTransform="capitalize"
      >
        Proudly made with Care by our team
      </Text>
      <Box w="10rem" h="10rem" bg="white" rounded="full">
        <Logo h="100%" w="100%" />
      </Box>
      <Text fontSize="2xl" fontWeight="extrabold" color="white">
        PROXELA
      </Text>
    </Box>
  )
}

export default Footer
