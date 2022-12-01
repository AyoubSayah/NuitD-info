import { useEffect } from 'react'

import './app.css'
import { useRoutes } from 'react-router-dom'
import InfoModal from './components/modals/ModalInfo'
import SuccessModal from './components/modals/ModalSucces'
import ErrorModal from './components/modals/ModalError'
import LAYOUT_ROUTE from './layout/routes/routes'
import { AUTH_ROUTES } from './modules/auth/routes/routes'

function App() {
  const routes = useRoutes([...AUTH_ROUTES, ...LAYOUT_ROUTE])
  useEffect(() => {}, [])
  return (
    <div className="App">
      {routes}

      <InfoModal />
      <SuccessModal />
      <ErrorModal />
    </div>
  )
}

export default App
