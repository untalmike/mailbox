
const Anonimato = ({botones, respond_form, setRespond_form, imagenes}) => {
    const { accion } = respond_form
    const {anonimo, persona}=imagenes
    return (
        <div className={accion !== "" && botones === 2 ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-4 dark:text-gray-200">
                <h2 className="uppercase text-3xl">Tipo de queja</h2>
            </div>
            <div className="flex space-x-8 px-8">
                <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 dark:bg-gray-900 dark:border-2">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img src={anonimo} className="shadow-xl dark:bg-white rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <div className="p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                            <span className="text-sm text-slate-400">Usuarios anónimos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center'>
                            <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 dark:hover:bg-white font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                <input type="radio" className="text-center text-2xl w-6 h-6 : text-white" value="Si" onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="anonimato"/>
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
                <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 dark:bg-gray-900 dark:border-2">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img src={persona} className="shadow-xl dark:bg-white rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <div className="p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,360</span>
                                            <span className="text-sm text-slate-400">Usuarios no anónimos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center'>
                            <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 dark:hover:bg-white font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                <input type="radio" className="text-center text-2xl w-6 h-6" value="No" onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="anonimato"/>
                                <hr className='my-2 '/>
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
        </div>
    )
}

export default Anonimato