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
        <div className="md:w-full text-gray-600 font-bold flex justify-center items-center py-4 flex-col">
            <h2 className="uppercase text-3xl py-8">Acción</h2>
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

    )
}

export default Formulario