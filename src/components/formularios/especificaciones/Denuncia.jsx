
const Denuncia = ({respond_form, setRespond_form, botones}) => {
    const {accion, anonimato} = respond_form
    return ( 
        <div className={(accion === "Denuncia" && anonimato === "Si" && botones === 5) || (accion === "Denuncia" && anonimato === "No" && botones === 6) ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-4 dark:text-gray-200">
                <h2 className="uppercase text-3xl">Denuncia</h2>
            </div>
            <div className="">
                <span className='text-xl dark:text-gray-200'>Agradecemos tu confianza, por favor responde las siguientes preguntas para realizar un seguimiento y dar solución a tu denuncia.</span>
                <div className="grid space-y-5 space-x-2 p-2 sm:grid-cols-1 lg:grid-cols-1 gap-3">
                    <div className='grid grid-rows-1'>
                        <span className='text-xl dark:text-gray-200'>Indícanos cual fue la fecha en la que sucedieron los hechos</span>
                        <input type="date" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="fechaDenuncia"/>
                    </div>
                    <div className='grid grid-rows-1'>
                        <span className='text-xl dark:text-gray-200'>Indícanos cual fue la hora en la que sucedieron los hechos </span>
                        <input type="time" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="horaDenuncia"/>
                    </div>
                    <div className='grid grid-rows-1'>
                        <span className='text-xl dark:text-gray-200'>En qué área del call center sucedieron los hechos </span>
                        <input type="text" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="lugarDenuncia"/>
                    </div>
                    <div className='grid grid-rows-1'>
                        <span className='text-xl dark:text-gray-200'>¿Como te enteraste de los hechos?</span>
                        <select className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="descripcionDenuncia">
                            <option value="">Seleccione...</option>
                            <option value="Yo observe lo hechos y quiero denunciarlo">Yo observe lo hechos y quiero denunciarlo</option>
                            <option value="Yo soy víctima y quiero denunciarlo">Yo soy víctima y quiero denunciarlo</option>
                            <option value="Otra persona me informo sobre los hechos y quiero denunciarlo">Otra persona me informo sobre los hechos y quiero denunciarlo</option>
                        </select>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Denuncia