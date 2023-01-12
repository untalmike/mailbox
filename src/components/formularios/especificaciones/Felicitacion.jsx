const Felicitacion = ({botones, respond_form, setRespond_form}) => {

    const {accion, anonimato} = respond_form
    
    return (
        <div className={(accion === "Felicitacion" && anonimato === "Si" && botones === 5) || (accion === "Felicitacion" && anonimato === "No" && botones === 6) ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-4 dark:text-gray-200">
                <h2 className="uppercase text-3xl">Felicitación</h2>
            </div>
            <div className="">
                <span className='text-xl dark:text-gray-200'>Agradecemos tu confianza, por favor responde las siguientes preguntas para realizar un seguimiento y dar solución a tu denuncia.</span>
                <div className="grid space-y-5 space-x-2 p-2 sm:grid-cols-1 lg:grid-cols-1 gap-3">
                    <div className='grid grid-rows-1'>
                        <span className='text-xl dark:text-gray-200'>¿Cuál es la persona o área a la que deseas extender tu felicitación? </span>
                        <input type="text" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="personaFelicitacion"/>
                    </div>
                    <div className='grid grid-rows-1'>
                        <span className='text-xl dark:text-gray-200'>¿Cuéntanos porque quieres felicitarlo? </span>
                        <input type="text" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="porqueFelicitacion"/>
                    </div>
                    <div className='grid grid-rows-1'>
                        <span className='text-xl dark:text-gray-200'>¿Te gustaría que se entregue un reconocimiento público por estas acciones? </span>
                        <input type="text" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="reconocimientoFelicitacion"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Felicitacion