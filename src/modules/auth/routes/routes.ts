import { createElement, lazy } from 'react'

import { IRoute } from '../../../config/models/models'
// eslint-disable-next-line @typescript-eslint/promise-function-async
const Auth = lazy(() => import('../Auth'))

// export lazy route

export const AUTH_ROUTES: IRoute[] = [
  {
    path: '/auth',
    element: createElement(Auth),
    name: 'Auth',
    exact: true,
  },
]
