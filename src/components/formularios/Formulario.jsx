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
import Comentarios from './preguntas/Comentarios'
import Denuncia from './especificaciones/Denuncia'
import Queja from './especificaciones/Queja'
import Sugerencia from './especificaciones/Sugerencia'
import Felicitacion from './especificaciones/Felicitacion'
import Swal from 'sweetalert2'

const Formulario = () => {

    const [respond_form, setRespond_form] = useState({
        accion:'', anonimato:'', numeroEmpleado:'', nombreEmpleado:'', plaza:'', experience:'',
        queja:'', sugerencia:'', fechaDenuncia:'', horaDenuncia:'',lugarDenuncia:'', 
        descripcionDenuncia:'', personaFelicitacion:'', porqueFelicitacion:'', reconocimientoFelicitacion:'',
        comentarios:'', folio:''
    })
    const {accion, experience} = respond_form

    const DATOS_ACCION = {
        "Queja o Reclamo":1,
        "Sugerencia":2,
        "Denuncia":3,
        "Felicitacion":4
    }

    const EXPERIENCE_ASIGNADO = {
        "Gonzalo Garza": 1,
        "Leyda Blanco": 2
    }

    const folio = DATOS_ACCION[accion]+""+EXPERIENCE_ASIGNADO[experience];
    console.log(folio)


    const [botones, setBotones] = useState(0)
    const [error, setError] = useState(false)
    
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
            <div className="md:w-full text-gray-600 font-bold flex justify-center items-center py-4 flex-col bg-white">                
                <form onSubmit={SendQuiz}>
                    <div className='flex flex-col justify-center items-center'>
                        {botones === 0 ? (
                            <Bienvenida
                                botones={botones}
                            />
                        ) : (
                            <>
                                <Accion
                                    botones={botones}
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    imagenes={imagenes}
                                />
                                <Anonimato
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                    imagenes={imagenes}
                                />
                                <Personal
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                />
                                <Plazas
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                    imagenes={imagenes}
                                />
                                <Experiences
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                    imagenes={imagenes}
                                />
                                <Denuncia 
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                />
                                <Queja
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                />
                                <Sugerencia
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                />
                                <Felicitacion
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                />
                                <Comentarios
                                    respond_form={respond_form}
                                    setRespond_form={setRespond_form}
                                    botones={botones}
                                />
                            </>
                        )}

                    </div>
                    <div className='flex justify-between px-8 py-8'>
                        <div className='flex justify-start'>
                            <div className={botones === 0 ? "bg-gray-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle":'bg-teal-700 hover:bg-teal-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle animate-bounce'}>
                                <button type="button" onClick={() => botones === 0 ? setBotones(botones - 0) : setBotones(botones - 1)} disabled={botones === 0 ? true : false}>
                                    <svg className="w-8 h-8 font-extrabold bi bi-arrow-left" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={respond_form.comentarios === "" ? "flex bg-gray-600 text-white border-2 mx-6 px-6 py-2 rounded-xl text-center align-middle cursor-not-allowed" : 'flex bg-teal-700 text-white hover:bg-teal-600 border-2 mx-6 px-6 py-2 rounded-xl text-center align-middle'}>
                            <input type="submit" value="Continuar" className='border-1 border-gray-800 uppercase' disabled={respond_form.comentarios !== "" ? false : true }/>
                        </div>
                        
                        <div className='flex justify-end'>
                            <div className={respond_form.comentarios !== '' ? "bg-gray-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle" : 'bg-teal-700 hover:bg-teal-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle animate-bounce'}>
                                <button id="front" type="button" onClick={()=> respond_form.comentarios !== "" ? setBotones(botones + 0) : setBotones(botones + 1)} disabled={respond_form.comentarios !== "" ? true : false}>
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

    async function SendQuiz(event){
        event.preventDefault();

        try{
            const data = await consulta_Fetch(`app_mysql_insert.php`, {
                from: 'satisfaccion_clientes',
                insert_values: ` null, '${respond_form.accion}', '${respond_form.anonimato}', '${respond_form.numeroEmpleado}', '${respond_form.nombreEmpleado}', '${respond_form.plaza}',
                '${respond_form.experience}', '${respond_form.queja}', '${respond_form.sugerencia}', '${respond_form.fechaDenuncia}', '${respond_form.horaDenuncia}',
                '${respond_form.lugarDenuncia}', '${respond_form.descripcionDenuncia}', '${respond_form.personaFelicitacion}', '${respond_form.porqueFelicitacion}', '${respond_form.reconocimientoFelicitacion}',
                '${respond_form.comentarios}', '${folio}', NOW()`
            });
        
            if(data.estatus && data.return.estatus.length > 0 && data.return.estatus.indexOf('Error:') === -1){
                Swal.fire({
                    title: '¡HURRA! 🎉',
                    text: 'Gracias por responder la encuesta',
                    icon: 'success', 
                    showConfirmButton: false,
                    willClose: () => {
                        history.push(`/`)
                    }
                })
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'No se pudo registrar',
                    icon: 'error', 
                    showConfirmButton:false
                })
            }
        }catch(e){
            Swal.fire({
                title: 'Error!',
                text: 'Falla en la conexion',
                icon: 'error', 
                showConfirmButton:false
            })
        }
    }

}

export default Formulario