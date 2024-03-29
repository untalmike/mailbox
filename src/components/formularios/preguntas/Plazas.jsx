import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChessKing } from '@fortawesome/free-regular-svg-icons'
import { fa5, faTrainSubway, faBullseye, faChurch, faDemocrat, faHotdog, faUmbrellaBeach, faGuitar, faBell} from '@fortawesome/free-solid-svg-icons'

const Plazas = ({botones, respond_form, setRespond_form, imagenes}) => {

    // This const destructured, contain the images, we need put a check compare
    const {complain} = imagenes
    
    // destructuring of array included into respond_form
    const { anonimato, numeroEmpleado, nombreEmpleado } = respond_form

    // There is an array, have all places inside and limit the use to grids or cards, we need just one and using a map, order all places
    const array_plazas = [ "Monterrey Obispado", "Monterrey 5 de Mayo", "Monterrey Tapia", "Monterrey Arteaga", "Guadalajara", "Puebla", "Queretaro", "Hermosillo", "Tijuana", "Merida" ];
    const array_iconos = { "Monterrey Obispado": faChessKing, "Monterrey 5 de Mayo":fa5, "Monterrey Tapia":faTrainSubway, "Monterrey Arteaga":faBullseye,
    "Guadalajara":faGuitar, "Puebla":faChurch, "Queretaro":faBell, "Hermosillo":faHotdog, "Tijuana":faDemocrat, "Merida":faUmbrellaBeach }; 

    return (
        <div className={anonimato === "Si" && botones === 3 ? "" : anonimato === "No" && botones === 4 && numeroEmpleado !== "" && nombreEmpleado !== "" ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-12 dark:text-gray-200">
                <h2 className="uppercase text-3xl">Plazas TYT</h2>
            </div>
                <div className="grid grid-cols-5 justiufy-center">
            { array_plazas.map((plaza, i) => (
                    <div className="flex px-8" key={i}>
                        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 dark:bg-gray-900 dark:border-2" >
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full flex justify-center">
                                        <div className="relative">
                                            <FontAwesomeIcon icon={array_iconos[plaza]} className="fa-8x shadow-xl dark:bg-white rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                        </div>
                                    </div>
                                    <div className="w-full text-center mt-20">
                                        <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                            <div className="p-3 text-center">
                                                <div className="p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                                    <span className="text-sm text-slate-400">Casos</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-full items-center justify-center'>
                                    <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 dark:hover:bg-white font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                        <input type="radio" className="text-center text-2xl w-6 h-6 : text-white" value={plaza} onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="plaza"/>
                                        <hr className='my-2'/>
                                        <h3 className=''>{plaza}</h3>

                                    </div>
                                </div>
                                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            
        </div>
    )
}

export default Plazas