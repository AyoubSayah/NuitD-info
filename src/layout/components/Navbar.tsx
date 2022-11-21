import {
  Box,
  Button,
  Flex,
  IconButton,
  Img,
  keyframes,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from '@chakra-ui/react'
import { FunctionComponent, memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { NavLink } from 'react-router-dom'

import Logo from '../../components/logo/Logo'
import bottomNavbarImage from '../../assets/landing/navbar.png'
type NavbarProps = {
  toggleSideBar?: () => void
  sideBarWidth?: number
}

const Navbar: FunctionComponent<NavbarProps> = ({
  toggleSideBar,
  sideBarWidth,
}) => {
  const { t, i18n } = useTranslation()
  const [isSticky, setIsSticky] = useState(false)
  const handleLanguageChange = (e: any) => {
    void i18n.changeLanguage(e.target.value)
  }
  const animationKeyframes = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
    }`
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
  }, [])
  return (
    <Box
      position={isSticky ? 'fixed' : 'relative'}
      top={0}
      left={0}
      w="100%"
      h="6rem"
      px="1rem"
      animation={isSticky ? `${animationKeyframes} 0.5s ease-in-out` : ''}
      py="1rem"
      zIndex="999999"
      background="white"
      boxShadow={isSticky ? 'md' : ''}
    >
      <Flex
        alignItems="center"
        justifyContent={'space-between'}
        right="0"
        top="0"
        w="100%"
      >
        <Flex alignItems="center">
          <Logo h="4rem" w="4rem" />
        </Flex>
        <Flex
          alignItems="center"
          bg="white"
          fontSize="1.1rem"
          fontWeight="thin"
          gap="1rem"
          justifyContent="center"
          p=".5rem"
          w="100%"
          whiteSpace="nowrap"
        >
          <NavLink to={'/'}>
            {({ isActive }) => (
              <Text
                color={isActive ? 'primary.500' : 'black'}
                fontSize="lg"
                fontWeight="bold"
              >
                Home
              </Text>
            )}
          </NavLink>
          <NavLink to={'/contactus'}>
            {({ isActive }) => (
              <Text
                color={isActive ? 'primary.500' : 'black'}
                fontSize="lg"
                fontWeight="bold"
              >
                Contact
              </Text>
            )}
          </NavLink>
          <NavLink to={'/services'}>
            {({ isActive }) => (
              <Text
                color={isActive ? 'primary.500' : 'black'}
                fontSize="lg"
                fontWeight="bold"
              >
                Services
              </Text>
            )}
          </NavLink>
        </Flex>
        <Flex alignItems="center" gap="1rem" ml="auto">
          <Button
            _hover={{
              background: 'primary.600',
            }}
            background="primary.500"
            color="white"
            rounded="full"
            size="lg"
            // py="1.3rem"
            fontWeight="bold"
          >
            JOIN US
          </Button>
          {/* <Select
            bg="white"
            w="6.5rem"
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            <option value={'en'}>English</option>
            <option value={'fr'}>French</option>
          </Select> */}
        </Flex>
      </Flex>
      <Img
        height="5rem"
        mt="-2rem"
        position="relative"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-1"
      />
    </Box>
  )
}

export default memo(Navbar)
