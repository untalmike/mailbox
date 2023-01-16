import { useState } from 'react'
import Formulario from './components/formularios/Formulario'
import Header from './components/Header'

function App() {

  const [isChecked, setIsChecked] = useState(true)
  
    //Esta validación sirve para el dark mode
    if(isChecked){
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark') 
    }else{
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
    }

  return (
    <div className="container mx-auto mt-20 dark:bg-gray-900">
      <Header
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <div className='mt-12 flex md:flex border-2 rounded-xl shadow-xl'>
        <Formulario
          isChecked={isChecked}
        />
      </div>
    </div>
  )
}

export default App
