import { useState } from 'react'
import Formulario from './components/formularios/Formulario'
import Header from './components/Header'

function App() {

  const [motivo, setMotivo] = useState({})

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-12 flex md:flex border-2 rounded-xl shadow-xl'>
        <Formulario
          motivo={motivo}
          setMotivo={setMotivo}
        />
      </div>
    </div>
  )
}

export default App
