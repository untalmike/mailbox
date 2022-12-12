import {useState} from 'react'
import claim from '../../assets/claim.png'
import clapping from '../../assets/clapping.png'
import suggestion from '../../assets/suggestion.png'
import complain from '../../assets/complain.png'

const Accion = ({motivo, setMotivo}) => {

    const [checkeado, setCheckeado] = useState(false)
    const [accion, setAccion] = useState('')
    console.log(checkeado)

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex space-x-4 px-4'>
                <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img src={claim} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <div class="p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                            <span class="text-sm text-slate-400">Quejas registradas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center'>
                            <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                <input type="radio" className="text-center text-2xl w-6 h-6" value="Queja" onClick={() => setCheckeado(checkeado == true)} onChange{ ...e => setAccion(e.target.value) } name="Queja"/>
                                <hr className='my-2'/>
                                <h3>Queja o Reclamo</h3>
                            </div>
                        </div>
                        
                        <div className="mt-6 py-6 border-t border-slate-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    <p className="font-light leading-relaxed text-slate-600 mb-4">Deja tus quejas o sugerencias hacia un colaborador o área</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img src={suggestion} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <div class="p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">2,360</span>
                                            <span class="text-sm text-slate-400">Sugerencias registradas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center'>
                            <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                <input type="radio" className="text-center text-2xl w-6 h-6" value="Sugerencia" />
                                <hr className='my-2'/>
                                <h3>Sugerencia</h3>
                            </div>
                        </div>
                        
                        <div className="mt-6 py-6 border-t border-slate-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    <p className="font-light leading-relaxed text-slate-600 mb-4">Aporta tus ideas a la mejora de procesos, áreas o personal, tu opinión importa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img src={complain} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <div class="p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">1,360</span>
                                            <span class="text-sm text-slate-400">Denuncias registradas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center'>
                            <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                <input type="radio" className="text-center text-2xl w-6 h-6" value={accion}/>
                                <hr className='my-2'/>
                                <h3>Denuncia</h3>
                            </div>
                        </div>
                        
                        <div className="mt-6 py-6 border-t border-slate-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    <p className="font-light leading-relaxed text-slate-600 mb-4">Esta sección te permitirá realizar una denuncia directa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img src={clapping} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <div class="p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">5,360</span>
                                            <span class="text-sm text-slate-400">Felicitaciones registradas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center'>
                            <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                <input type="radio" className="text-center text-2xl w-6 h-6" value={accion}/>
                                <hr className='my-2'/>
                                <h3>Felicitación</h3>
                            </div>
                        </div>
                        
                        <div className="mt-6 py-6 border-t border-slate-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    <p className="font-light leading-relaxed text-slate-600 mb-4">Felicita a cualquier colaborador que lo merezca, permitenos reconocer su valor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 px-6 py-2 rounded-xl text-gray-700 bg-white hover:bg-gray-900 hover:text-white'>
                <input type="submit" value="Continuar" className='border-1 border-gray-800 uppercase'/>
            </div>
        </div>
    )
}

export default Accion