import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Img,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import notifcationImage from '../../../assets/landing/notification.svg'
import NewsImage from '../../../assets/landing/news.svg'
import coverImage from '../../../assets/landing/cover.svg'
import DesignImage from '../../../assets/landing/design.svg'

const Services = () => {
  return (
    <Box as="section" zIndex={15} position="relative">
      <Text
        as="h2"
        fontWeight="extrabold"
        fontSize="4xl"
        mt="5rem"
        textAlign="center"
        textTransform="capitalize"
        maxW={{ base: '100%', md: '50rem' }}
        mx="auto"
      >
        We Should Provide You with the best features{' '}
      </Text>
      <Text
        fontSize="2xl"
        maxW={{ base: '100%', md: '45rem' }}
        mx="auto"
        textAlign="center"
      >
        Join Us Now and get the best features that you can't find anywhere else
      </Text>
      <SimpleGrid columns={2} mt="4rem" gap="2rem">
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
    </Box>
  )
}

export default Services
