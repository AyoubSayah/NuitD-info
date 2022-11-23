import { useEffect } from 'react'
import Layout from './layout/Layout'
import './app.css'
import InfoModal from './components/modals/ModalInfo'
import SuccessModal from './components/modals/ModalSucces'
import ErrorModal from './components/modals/ModalError'
function App() {
  useEffect(() => {}, [])
  return (
    <div className="App">
      <Layout />
      <InfoModal />
      <SuccessModal />
      <ErrorModal />
    </div>
  )
}

export default App
