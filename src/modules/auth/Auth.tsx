import { Box, Flex } from '@chakra-ui/react'
import Blob from '../../components/Blob/Blob'
import BlobSmall from '../../components/Blob/BlobSmall'

const Auth = () => {
  return (
    <Flex minHeight="100vh" overflowX="hidden">
      <Flex flexBasis="50%" justifyContent="flex-end" alignItems="center">
        <Box
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
          w="30rem"
          height="30rem"
          bg="white"
          borderRadius="lg"
          mr="-10rem"
          position="relative"
          zIndex={2}
        ></Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        gap="3rem"
        justifyContent="center"
        flexBasis="50%"
        bg="primary.500"
      >
        <Blob />
        <BlobSmall />
        <Blob />
        <BlobSmall />
        <BlobSmall />

        <Blob />
        <BlobSmall />
      </Flex>
    </Flex>
  )
}

export default Auth
