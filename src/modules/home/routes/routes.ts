import { createElement, lazy } from 'react'
import { IRoute } from '../../../config/models/models'
// eslint-disable-next-line @typescript-eslint/promise-function-async
const Home = lazy(() => import('../Home'))

// export lazy route

export const HOME_ROUTES: IRoute[] = [
  {
    path: '/',
    element: createElement(Home),
    name: 'home',
    exact: true,
  },
]
