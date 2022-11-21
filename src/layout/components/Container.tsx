import { Box } from '@chakra-ui/react'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { CONTACTUS_ROUTES } from '../../modules/contactus/routes/routes'
import { HOME_ROUTES } from '../../modules/home/routes/routes'

const Container = () => {
  const routes = useRoutes([...CONTACTUS_ROUTES, ...HOME_ROUTES])

  return (
    <Box pos="relative">
      <Suspense fallback={() => <></>}>{routes}</Suspense>
    </Box>
  )
}

export default Container
