import {useState, useEffect} from 'react'
import claim from '../../assets/claim.png'
import suggestion from '../../assets/suggestion.png'
import complain from '../../assets/complain.png'
import clapping from '../../assets/clapping.png'
import anonimo from '../../assets/anonimo.png'
import persona from '../../assets/persona.png'
import Accion from './preguntas/Accion'
import Anonimato from './preguntas/Anonimato'
import Personal from './preguntas/Personal'
import Plazas from './preguntas/Plazas'
import Experiences from './preguntas/Experiences'

const Formulario = ({motivo, setMotivo}) => {
    
    const [accion, setAccion] = useState('')
    const [anonimato, setAnonimato] = useState('')
    const [numeroEmpleado, setNumeroEmpleado] = useState('')
    const [nombreEmpleado, setNombreEmpleado] = useState('')
    const [plaza, setPlaza] = useState('')
    const [experience, setExperience] = useState('')
    const [queja, setQueja] = useState('')
    const [sugerencia, setSugerencia] = useState('')
    const [denuncia, setDenuncia] = useState('')
    const [felicitacion, setFelicitacion] = useState('')


    const imagenes = {
        claim,
        suggestion,
        complain,
        clapping,
        anonimo,
        persona
    }

    return (
        <>
            <div className="md:w-full text-gray-600 font-bold flex justify-center items-center py-4 flex-col">
                <h2 className="uppercase text-3xl py-8">Acción</h2>
                <div className='flex justify-between'>
                    <div className='bg-purple-400 rounded-full h-8 w-8 text-center flex items-center justify-center align-middle animate-bounce'>
                        <button className='hover:bg-red-600'>
                           <svg className="w-6 h-4 font-extrabold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </button>
                    </div>
                    <div className='bg-purple-400 rounded-full h-8 w-8 text-center flex items-center justify-center align-middle animate-bounce'>
                        <a className='-ml-3'>
                            <svg
                                class="w-5 h-5 ml-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <form>
                     
                    <div className='flex flex-col justify-center items-center'>

                        <Accion
                            setAccion={setAccion}
                            imagenes={imagenes}
                        />
                        <Anonimato
                            setAnonimato={setAnonimato}
                            accion={accion}
                            imagenes={imagenes}
                        />
                        <Personal
                            setNumeroEmpleado={setNumeroEmpleado}
                            setNombreEmpleado={setNombreEmpleado}
                        />
                        <Plazas
                            setPlaza={setPlaza}
                            imagenes={imagenes}
                        />
                        <Experiences
                            setExperience={setExperience}
                            imagenes={imagenes}
                        />
                       

                    </div>
                    <div className='border-2 mx-6 px-6 py-2 rounded-xl text-gray-700 bg-white hover:bg-gray-900 hover:text-white text-center'>
                        <input type="submit" value="Continuar" className='border-1 border-gray-800 uppercase'/>
                    </div>

                </form>
            </div>
            
        </>
    )
}

export default Formulario