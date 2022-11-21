import { Card, Img, Text } from '@chakra-ui/react'
import React from 'react'

const CarouselItem = ({ data }: any) => {
  return (
    <Card
      bg="white"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      height="31rem"
      mx="1rem"
      p="1rem"
      rounded="lg"
      w="19rem"
      transition="all 0.3s ease-in-out"
      _hover={{
        border: '4px solid ',
        borderColor: 'primary.500',
        transform: 'scale(1.05)',
      }}
    >
      <Img
        alt={data.title}
        objectFit="cover"
        rounded="lg"
        src={data?.enclosures[0]?.url}
      />
      <Text fontSize="lg" fontWeight="bold" mt="1rem" noOfLines={3}>
        {data?.title}
      </Text>
      <Text noOfLines={3}>{data?.description}</Text>
      <Text as="a" color="blue.500" href={data?.link} target="_blank">
        Discover details
      </Text>
    </Card>
  )
}

export default CarouselItem
