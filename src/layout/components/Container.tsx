import { useRoutes } from 'react-router-dom'

import { CONTACTUS_ROUTES } from '../../modules/contactus/routes/routes'
import { HOME_ROUTES } from '../../modules/home/routes/routes'

const Container = () => {
  const routes = useRoutes([...CONTACTUS_ROUTES, ...HOME_ROUTES])

  return <div>{routes}</div>
}

export default Container
