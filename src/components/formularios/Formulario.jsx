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
import Bienvenida from './Bienvenida'

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
    const [comentarios, setComentarios] = useState('')
    const [botones, setBotones] = useState(0)
    console.log(botones)

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
                <form>
                    <div className='flex flex-col justify-center items-center'>
                        {botones === 0 ? (
                            <Bienvenida 
                                botones={botones}
                            />
                        ) : (
                            <>
                                <Accion
                                    accion={accion}
                                    setAccion={setAccion}
                                    botones={botones}
                                    imagenes={imagenes}
                                />
                                <Anonimato
                                    accion={accion}
                                    setAnonimato={setAnonimato}
                                    botones={botones}
                                    imagenes={imagenes}
                                />
                                <Personal
                                    setNumeroEmpleado={setNumeroEmpleado}
                                    setNombreEmpleado={setNombreEmpleado}
                                    botones={botones}
                                    anonimato={anonimato}
                                />
                                <Plazas
                                    anonimato={anonimato}
                                    numeroEmpleado={numeroEmpleado}
                                    nombreEmpleado={nombreEmpleado}
                                    setPlaza={setPlaza}
                                    botones={botones}
                                    imagenes={imagenes}
                                />
                                <Experiences
                                    plaza={plaza}
                                    setExperience={setExperience}
                                    botones={botones}
                                    imagenes={imagenes}
                                />
                            </>
                        )}
                       

                    </div>
                    <div className='flex justify-between px-8'>

                    
                        <div className='flex justify-start'>
                            <div className={botones === 0 ? "bg-gray-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle":'bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle animate-bounce'}>
                                <button type="button" onClick={()=>{(botones <= 0)? setBotones(botones - 0): setBotones(botones - 1)}} disabled={(botones === 0)? true:false}>
                                    <svg className="w-8 h-8 font-extrabold bi bi-arrow-left" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className=' flex bg-teal-600 text-white hover:bg-teal-500 border-2 mx-6 px-6 py-2 rounded-xl text-center align-middle'>
                            <input type="submit" value="Continuar" className='border-1 border-gray-800 uppercase'/>
                        </div>
                        
                        <div className='flex justify-end'>
                            <div className={comentarios !== '' ? "bg-gray-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle" : 'bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle animate-bounce'}>
                                <button type="button" onClick={()=> setBotones(botones + 1)}>
                                    <svg className="w-8 h-8 font-extrabold bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    

                </form>
            </div>
            
        </>
    )
}

export default Formulario