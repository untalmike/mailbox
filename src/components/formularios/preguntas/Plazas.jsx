
const Plazas = ({botones, anonimato, nombreEmpleado, numeroEmpleado, setPlaza, imagenes}) => {

    const {complain} = imagenes
    return (
        <div className={anonimato === "Sí" && botones === 3 ? "" : anonimato === "No" && botones === 4 && numeroEmpleado !== "" && nombreEmpleado !== "" ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-12">
                <h2 className="uppercase text-3xl">Plazas TYT</h2>
            </div>
            <div className="flex space-x-8 px-8">
                <div className="flex space-x-8 px-8">
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
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6 : text-white" value="Monterrey Obispado" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Monterrey Obispado</h3>
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
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,360</span>
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Monterrey 5 de mayo" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Monterrey 5 de mayo</h3>
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
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Monterrey Tápia" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Monterrey Tápia</h3>
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
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">5,360</span>
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Monterrey Arteaga" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Monterrey Arteaga</h3>
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
                <div className="flex space-x-8 px-8">
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
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">5,360</span>
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Guadalajara" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Guadalajara</h3>
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
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6 : text-white" value="Puebla" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Puebla</h3>
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
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,360</span>
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Querétaro" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Querétaro</h3>
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
                <div className="flex space-x-8 px-8">
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
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Hermosillo" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Hermosillo</h3>
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
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">5,360</span>
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Tijuana" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Tijuana</h3>
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
                                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">5,360</span>
                                                <span className="text-sm text-slate-400">Casos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <div className='justify-center text-base mt-0 mb-2 text-slate-600 hover:text-slate-900 font-bold uppercase items-center text-center border-2 border-gray-200 py-4 rounded-xl w-4/6 hover:bg-gray-400'>
                                    <input type="radio" className="text-center text-2xl w-6 h-6" value="Mérida" onChange={e => setPlaza(e.target.value)} name="plaza"/>
                                    <hr className='my-2'/>
                                    <h3>Mérida</h3>
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
            </div>
            
        </div>
    )
}

export default Plazas