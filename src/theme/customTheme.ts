import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export const theme = extendTheme({
  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: '"Open Sans", sans-serif',
  },
  colors,
  styles: {
    global: {
      html: {
        fontSize: '14px',
        webkitUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      },
      body: {},

      '&::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
        height: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'primary',
        borderRadius: '24px',
      },
    },
  },
})
