import {useState} from 'react'
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
import Botones from '../Botones'
import Swal from 'sweetalert2'
import { consulta_Fetch } from '../../utils'
import GetDataPlace  from '../../server/helpers/help_data.jsx';

const Formulario = () => {
    
    // State de los datos del formulario
    const [respond_form, setRespond_form] = useState({
        accion:'', anonimato:'', numeroEmpleado:'', nombreEmpleado:'', plaza:'', experience:'',
        queja:'', sugerencia:'', fechaDenuncia:'', horaDenuncia:'',lugarDenuncia:'', 
        descripcionDenuncia:'', personaFelicitacion:'', porqueFelicitacion:'', reconocimientoFelicitacion:'',
        comentario:'', folio:''
    })

    // Destructuring de los datos de formulario
    const {accion, experience} = respond_form

    let folio = 0;
    GetDataPlace().then(datos=>{
        //console.log(datos[0]["Id"])
        
        // Esto sirve para crear el folio
        const DATOS_ACCION = { "Queja o Reclamo":1, "Sugerencia":2, "Denuncia":3, "Felicitacion":4 }
        const EXPERIENCE_ASIGNADO = { "Gonzalo Garza": 1, "Leyda Blanco": 2 } 

        if(DATOS_ACCION[accion] === undefined || EXPERIENCE_ASIGNADO[experience] === undefined){
            DATOS_ACCION[accion] = 0
            EXPERIENCE_ASIGNADO[experience] = 0
        }

        folio = DATOS_ACCION[accion]+""+EXPERIENCE_ASIGNADO[experience]+""+(parseInt(datos[0]["Id"])+1)

        if(folio.length <= 4){
            folio ="0000"+folio
        }else {
            folio ="000"+folio
        }

        return folio
    })

    // State de los botones para conocer el número marcado
    const [botones, setBotones] = useState(0)

    const imagenes = {
        claim,
        suggestion,
        complain,
        clapping,
        anonimo,
        persona
    }
    
    return (
        
        <div className="md:w-full text-gray-600 font-bold flex justify-center items-center py-4 flex-col bg-white dark:bg-gray-900">                
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
                <Botones
                    respond_form={respond_form}
                    botones={botones}
                    setBotones={setBotones}
                />
            </form>
        </div>
    )
    async function SendQuiz(event){
        event.preventDefault();

        try{

            const data = await consulta_Fetch(`app_mysql_insert.php`, {
                from: 'quejas',
                insert_values: `null, '${respond_form.accion}', '${respond_form.anonimato}', '${respond_form.numeroEmpleado}', '${respond_form.nombreEmpleado}',
                '${respond_form.plaza}', '${respond_form.experience}', '${respond_form.queja}', '${respond_form.sugerencia}', '${respond_form.fechaDenuncia}',
                '${respond_form.horaDenuncia}', '${respond_form.lugarDenuncia}', '${respond_form.descripcionDenuncia}', '${respond_form.personaFelicitacion}',
                '${respond_form.porqueFelicitacion}', '${respond_form.reconocimientoFelicitacion}', '${respond_form.comentario}', '${folio}', NOW()`
            });
        
            if(!data.estatus && data.return.estatus.length < 0 && data.return.estatus.indexOf('Error:') !== -1){
                Swal.fire({
                    title: 'Error!',
                    text: 'No se pudo registrar',
                    icon: 'error', 
                    showConfirmButton:false
                })
            }

            Swal.fire({
                title: '¡HURRA! 🎉',
                text: `Gracias por responder la encuesta tu folio creado es, ${folio}`,
                icon: 'success', 
                showConfirmButton: false,
                willClose: () => {
                    location.href='http://localhost:5173'
                }
            })
            
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