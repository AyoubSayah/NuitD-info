import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from '@chakra-ui/react'
import { FunctionComponent, memo } from 'react'
import { useTranslation } from 'react-i18next'

type NavbarProps = {
  toggleSideBar?: () => void
  sideBarWidth?: number
}

const Navbar: FunctionComponent<NavbarProps> = ({
  toggleSideBar,
  sideBarWidth,
}) => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (e: any) => {
    void i18n.changeLanguage(e.target.value)
  }

  return (
    <Flex
      alignItems="center"
      backdropBlur="15px"
      backdropFilter="auto"
      borderBottom="1px solid #C7C7D280"
      justifyContent={'space-between'}
      position="fixed"
      px="1rem"
      py="2rem"
      right="0"
      top="0"
      w={{ base: '100%' }}
      zIndex="999999"
    >
      <Flex alignItems="center"></Flex>
      <Flex alignItems="center" color="gray.500" gap="1rem" ml="auto">
        <Flex
          alignItems="center"
          bg="white"
          display={{ base: 'none', sm: 'flex' }}
          fontSize="1.1rem"
          fontWeight="thin"
          gap="0.5rem"
          p=".5rem"
          whiteSpace="nowrap"
        >
          s
        </Flex>
        <Select
          bg="white"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          <option value={'en'}>English</option>
          <option value={'fr'}>French</option>
          <option value={'ar'}>Arabic</option>
        </Select>
        <Box position="relative">
          <IconButton aria-label="notifications" bg="white" />
          <Box
            bg="red.500"
            borderRadius="full"
            h="10px"
            position="absolute"
            right="4px"
            top="9px"
            w="10px"
          />
        </Box>
        {t('profile')}

        <Menu>
          <MenuButton>
            <IconButton aria-label="notifications" bg="white" />
            aa
          </MenuButton>
          <MenuList>
            <MenuItem color="black" fontSize="1rem" gap={'0.5rem'}>
              {t('COMMON.PROFILE')}
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default memo(Navbar)
