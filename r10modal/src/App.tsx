import { useState } from 'react'
import ModalDialog from './components/ModalDialog'

import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <ModalDialog
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Varování">
          <p>Tohle nedělejte!</p>
        </ModalDialog>
    </>
  )
}

export default App
