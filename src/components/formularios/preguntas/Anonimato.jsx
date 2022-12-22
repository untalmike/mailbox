
const Anonimato = ({botones, setAnonimato, imagenes, accion}) => {
    const {anonimo, persona}=imagenes
    return (
        <>
            <div className={!accion && botones !== 2 ? "hidden" : accion && botones === 2 ? "flex space-x-8 px-8" : "hidden"}>
                <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img src={persona} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <div className="p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                            <span className="text-sm text-slate-400">Usuarios no anónimos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center'>
                            <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                <input type="radio" className="text-center text-2xl w-6 h-6 : text-white" value="Sí" onChange={e => setAnonimato(e.target.value)} name="anonimato"/>
                                <hr className='my-2'/>
                                <h3>Si</h3>
                            </div>
                        </div>
                        
                        <div className="mt-6 py-6 border-t border-slate-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    <p className="font-light leading-relaxed text-slate-600 mb-4">Registra tu {`${accion}`} de forma directa, puedes ingresar nombre y número de empleado</p>
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
                                    <img src={anonimo} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <div className="p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,360</span>
                                            <span className="text-sm text-slate-400">Usuarios anónimos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center'>
                            <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                <input type="radio" className="text-center text-2xl w-6 h-6" value="No" onChange={e => setAnonimato(e.target.value)} name="anonimato"/>
                                <hr className='my-2'/>
                                <h3>No</h3>
                            </div>
                        </div>
                        
                        <div className="mt-6 py-6 border-t border-slate-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    <p className="font-light leading-relaxed text-slate-600 mb-4">Registra tu {`${accion}`} de forma anónima, no podrás ingresar nombre o número de empleado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Anonimato