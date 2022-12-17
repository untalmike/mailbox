
const Accion = ({botones, accion, setAccion, imagenes}) => {

    const {claim, suggestion, complain, clapping} = imagenes;
    

    return (
        <>
            <div className={ botones === 2 ? "hidden": ""}>

                <div className="text-center flex justify-center items-center align-middle py-4">
                    <h2 className="uppercase text-3xl">Acción</h2>
                </div>
                <div className='flex space-x-8 px-8'>
                    <div className={accion === "Queja o Reclamo" ? "relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-teal-900 text-white w-full mb-6 shadow-lg rounded-xl mt-16" : "relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16"}>
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
                                            <div className="p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                                <span className="text-sm text-slate-400">Quejas registradas</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6 : text-white" value="Queja o Reclamo" onChange={e => setAccion(e.target.value)} name="accion"/>
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
                                            <div className="p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,360</span>
                                                <span className="text-sm text-slate-400">Sugerencias registradas</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Sugerencia" onChange={e => setAccion(e.target.value)} name="accion"/>
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
                                            <div className="p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">1,360</span>
                                                <span className="text-sm text-slate-400">Denuncias registradas</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Denuncia" onChange={e => setAccion(e.target.value)} name="accion"/>
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
                                            <div className="p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">5,360</span>
                                                <span className="text-sm text-slate-400">Felicitaciones registradas</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Felicitación" onChange={e => setAccion(e.target.value)} name="accion"/>
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
            </div>
        </>
        
    )
}

export default Accion