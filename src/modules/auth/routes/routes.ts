import { lazy } from 'react'

import { IRoute } from '../../../config/models/models'
// eslint-disable-next-line @typescript-eslint/promise-function-async
const Auth = lazy(() => import('../Auth'))

// export lazy route

export const CONTACTUS_ROUTES: IRoute[] = [
  {
    path: '/auth',
    component: Auth,
    name: 'Auth',
    exact: true,
  },
]
