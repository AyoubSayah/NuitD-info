import {
  Box,
  Button,
  chakra,
  Flex,
  Img,
  shouldForwardProp,
  Text,
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import coverPicture from '../../assets/landing/cover.svg'
import bottomNavbarImage from '../../assets/landing/navbar.png'
import CarouselNews from './components/CarouselNews'
import DevTeam from './components/DevTeam'
import Services from './components/Services'

const Home = () => {
  const ChakraImage = chakra(motion.img, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  return (
    <>
      <Flex
        h="calc(100vh - 7rem)"
        w="100%"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="15"
      >
        <Flex flexDirection="column" mx="auto" mt="-5rem" gap=".5rem">
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="bold"
            color="primary.700"
            textAlign="left"
            maxW="30rem"
          >
            PROXYLA
          </Text>
          <Text fontSize="2xl" fontWeight="bold" textAlign="left" maxW="30rem">
            Idk what to write here but I'm sure it will be something cool.
          </Text>
          <Text maxW="30rem">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            quod iusto quasi est dolore reiciendis corrupti voluptatum
            similique,
          </Text>
          <Flex gap=".5rem" mt="1rem">
            <Button colorScheme="red" size="lg">
              Start Now
            </Button>
            <Button size="lg">Contact Us</Button>
          </Flex>
        </Flex>
        <Box flexBasis="50%">
          <ChakraImage
            animate={{
              y: 20,
            }}
            src={coverPicture}
            alt="cocver"
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        </Box>
      </Flex>
      <Img
        height="5rem"
        mt="-2rem"
        position="absolute"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-6"
      />
      <Services />
      <Img
        height="5rem"
        mt="3rem"
        position="absolute"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-6"
      />
      <CarouselNews />
      <Img
        height="5rem"
        mt="-4zzzzzzrem"
        position="absolute"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-6"
      />
      <DevTeam />
    </>
  )
}

export default Home
