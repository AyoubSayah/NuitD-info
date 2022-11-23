/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { useGetNewsQuery } from '../slices/landingAsyncSlice'

import CarouselItem from './CarouselItem'
import { Box, Flex, Icon, Skeleton, Text } from '@chakra-ui/react'
import { Navigation } from 'swiper'

const CarouselNews = () => {
  const { data: feeds, isFetching } = useGetNewsQuery({})
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const listOfSkeletons = [1, 2, 3, 4]

  return (
    <Box as="section" zIndex={15} position="relative" my="8rem">
      <Text
        as="h2"
        fontWeight="extrabold"
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        mt="12rem"
        textAlign="center"
        textTransform="capitalize"
        maxW={{ base: '100%', md: '50rem' }}
        mx="auto"
      >
        Latest News from arround the world
      </Text>
      <Text
        fontSize="2xl"
        maxW={{ base: '100%', md: '45rem' }}
        mx="auto"
        textAlign="center"
      >
        We will send you Notification Everywhere
      </Text>
      <Box p="4rem">
        <Swiper
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: any) => console.log(swiper)}
          modules={[Navigation]}
          watchSlidesProgress={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            680: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          //   sx={{ '.swiper-wrapper': { padding: '0 2rem;' } }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {feeds &&
            feeds.length > 0 &&
            feeds?.map(
              (data: any) =>
                data?.enclosures.length > 0 && (
                  <SwiperSlide>
                    {({ isVisible }) => (
                      <CarouselItem
                        key={data.title}
                        data={data}
                        isVisible={isVisible}
                      />
                    )}
                  </SwiperSlide>
                )
            )}
          {isFetching && (
            <Flex justifyContent="space-between">
              {listOfSkeletons.map((item) => (
                <SwiperSlide>
                  <Skeleton
                    startColor="primary.50"
                    endColor="primary.100"
                    borderRadius="lg"
                    mx="1rem"
                  >
                    {' '}
                    <CarouselItem data={item} />
                  </Skeleton>
                </SwiperSlide>
              ))}
            </Flex>
          )}
          <Box
            ref={navigationNextRef}
            color="primary.500"
            transform="translateY(-50%)"
            cursor="pointer"
            width="3rem"
            zIndex={26}
            pos="absolute"
            right="-.8rem"
            top="45%"
            height="3rem"
          >
            <Icon viewBox="0 0 256 512" fill="primary.500" w="full" h="full">
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
            </Icon>
          </Box>
          <Box
            ref={navigationPrevRef}
            color="primary.500"
            pos="absolute"
            left="0rem"
            top="45%"
            transform="translateY(-50%)"
            cursor="pointer"
            width="3rem"
            zIndex={26}
            height="3rem"
          >
            <Icon viewBox="0 0 256 512" fill="primary.500" w="full" h="full">
              <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
            </Icon>
          </Box>
        </Swiper>
      </Box>
    </Box>
  )
}

export default CarouselNews
