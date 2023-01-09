
const Denuncia = () => {
    return ( 
        <>
        <h1>Denuncias</h1>
                                        <span className='text-xl'>Agradecemos tu confianza, favor de responder las siguientes preguntas para realizar un seguimiento y solución a tu denuncia.</span>
                                        <div className="grid space-x-2 p-2 sm:grid-cols-1 lg:grid-cols-1 gap-3">
                                            <>
                                                <div className='grid grid-rows-1'>
                                                    <span className='text-xl'>Indícanos cual fue la fecha en la que sucedieron los hechos</span>
                                                    <input type="date" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="bq_desc_denun_fecha"/>
                                                </div>
                                                <div className='grid grid-rows-1'>
                                                    <span className='text-xl'>Indícanos cual fue la hora en la que sucedieron los hechos </span>
                                                    <input type="time" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="bq_desc_denun_hora"/>
                                                </div>
                                                <div className='grid grid-rows-1'>
                                                    <span className='text-xl'>En qué área del call center sucedieron los hechos </span>
                                                    <input type="text" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="bq_desc_denun_lugar"/>
                                                </div>
                                                <div className='grid grid-rows-1'>
                                                    <span className='text-xl'>¿Como te enteraste de los hechos?</span>
                                                    <select className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="bq_desc_denun_quien">
                                                        <option value="">Seleccione...</option>
                                                        <option value="Yo observe lo hechos y quiero denunciarlo">Yo observe lo hechos y quiero denunciarlo</option>
                                                        <option value="Yo soy víctima y quiero denunciarlo">Yo soy víctima y quiero denunciarlo</option>
                                                        <option value="Otra persona me informo sobre los hechos y quiero denunciarlo">Otra persona me informo sobre los hechos y quiero denunciarlo</option>
                                                    </select>
                                                </div>
                                            </>
                                        </div>
                                    </>
    )
}

export default Denuncia