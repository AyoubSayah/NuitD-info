import {
  Box,
  Card,
  CardBody,
  CardHeader,
  chakra,
  Img,
  shouldForwardProp,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import notifcationImage from '../../../assets/landing/notification.svg'
import NewsImage from '../../../assets/landing/news.svg'
import coverImage from '../../../assets/landing/cover.svg'
import DesignImage from '../../../assets/landing/design.svg'
import UseInView from '../../../utils/hooks/UseInView'
import { isValidMotionProp, motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Services = () => {
  const { ref, controls } = UseInView()

  const ChakraDiv = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  return (
    <ChakraDiv
      zIndex={15}
      initial={{ y: 400, opacity: 0 }}
      animate={controls}
      position="relative"
      ref={ref}
    >
      <Text
        as="h2"
        fontWeight="extrabold"
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        mt="10rem"
        textAlign="center"
        textTransform="capitalize"
        maxW={{ base: '100%', md: '50rem' }}
        mx="auto"
      >
        We Should Provide You with the best features{' '}
      </Text>
      <Text
        fontSize={{ base: 'lg', md: '2xl' }}
        maxW={{ base: '100%', md: '45rem' }}
        mx="auto"
        textAlign="center"
      >
        Join Us Now and get the best features that you can't find anywhere else
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        px={{ base: '.5rem', md: 'none' }}
        mt="4rem"
        gap="2rem"
      >
        <Card
          mx="auto"
          px="3rem"
          background="white"
          rounded="lg"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
          w="100%"
          maxW="40rem"
        >
          <CardHeader
            fontWeight="extrabold"
            fontSize="2xl"
            mt="1.5rem"
            textAlign="center"
            textTransform="capitalize"
            maxW={{ base: '100%', md: '35rem' }}
          >
            We will send you Notification Everywhere
          </CardHeader>
          <CardBody>
            <Img src={notifcationImage} w="25rem" h="25rem" />
          </CardBody>
        </Card>
        <Card
          mx="auto"
          px="3rem"
          background="white"
          w="100%"
          maxW="40rem"
          rounded="lg"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
        >
          <CardHeader
            fontWeight="extrabold"
            fontSize="2xl"
            mt="1.5rem"
            textAlign="center"
            textTransform="capitalize"
            maxW={{ base: '100%', md: '35rem' }}
          >
            News and Updates will be sent to you
          </CardHeader>
          <CardBody>
            <Img src={NewsImage} w="25rem" h="25rem" />
          </CardBody>
        </Card>
        <Card
          mx="auto"
          px="3rem"
          background="white"
          w="100%"
          maxW="40rem"
          rounded="lg"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
        >
          <CardHeader
            fontWeight="extrabold"
            fontSize="2xl"
            mt="1.5rem"
            textAlign="center"
            textTransform="capitalize"
            maxW={{ base: '100%', md: '35rem' }}
          >
            A Beautiful Design that you will love
          </CardHeader>
          <CardBody>
            <Img src={coverImage} w="25rem" h="25rem" />
          </CardBody>
        </Card>
        <Card
          mx="auto"
          px="3rem"
          background="white"
          w="100%"
          maxW="40rem"
          rounded="lg"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
        >
          <CardHeader
            fontWeight="extrabold"
            fontSize="2xl"
            mt="1.5rem"
            textAlign="center"
            textTransform="capitalize"
            maxW={{ base: '100%', md: '35rem' }}
          >
            A great Community support
          </CardHeader>
          <CardBody>
            <Img src={DesignImage} w="25rem" h="25rem" />
          </CardBody>
        </Card>
      </SimpleGrid>
    </ChakraDiv>
  )
}

export default Services
