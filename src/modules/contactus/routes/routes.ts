import { lazy } from 'react'
import { IRoute } from '../../../config/models/models'
// eslint-disable-next-line @typescript-eslint/promise-function-async
const ContactUs = lazy(() => import('../ContactUs'))

// export lazy route

export const CONTACTUS_ROUTES: IRoute[] = [
  {
    path: '/contactus',
    component: ContactUs,
    name: 'ContactUs',
    exact: true,
  },
]
