
const Botones = ({botones, setBotones, respond_form}) => {
     const { comentario, accion, anonimato, numeroEmpleado, nombreEmpleado, plaza, experience, 
        queja, 
        sugerencia, 
        fechaDenuncia, 
        horaDenuncia, 
        lugarDenuncia, 
        descripcionDenuncia, 
        personaFelicitacion, 
        porqueFelicitacion, 
        reconocimientoFelicitacion 
    } = respond_form

    return (
        <div className='flex justify-between px-8 py-8'>
            <div className='flex justify-start'>
                <div className={botones === 0 ? "bg-gray-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle":'bg-teal-700 hover:bg-teal-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle animate-bounce'}>
                    <button type="button" onClick={() => botones === 0 ? setBotones(botones - 0) : setBotones(botones - 1)} disabled={botones === 0 ? true : false}>
                        <svg className="w-8 h-8 font-extrabold bi bi-arrow-left" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={comentario === "" ? "flex bg-gray-600 text-white border-2 mx-6 px-6 py-2 rounded-xl text-center align-middle cursor-not-allowed" : 'flex bg-teal-700 text-white hover:bg-teal-600 border-2 mx-6 px-6 py-2 rounded-xl text-center align-middle'}>
                <input type="submit" value="Continuar" className='border-1 border-gray-800 uppercase' disabled={comentario !== "" ? false : true }/>
            </div>
            {/**"":2, "Denuncia":3, "" */}
            <div className='flex justify-end'>
                <div className={
                        (botones === 1 && accion ==="") || 
                        (botones === 2 && anonimato ==="") || 
                        (botones === 3 && anonimato ==="No" && (nombreEmpleado === "" || numeroEmpleado === "")) || 
                        (botones === 3 && plaza === "") || 
                        (botones === 4 && plaza === "") || 
                        (botones === 4 && experience === "") || 
                        (botones === 5 && experience === "") || 
                        (botones === 5 && accion === "Queja o Reclamo" && queja === "") || 
                        (botones === 5 && accion === "Sugerencia" && sugerencia === "") || 
                        (botones === 5 && accion === "Denuncia" && (fechaDenuncia === "" || horaDenuncia === "" || lugarDenuncia === "" || descripcionDenuncia === "")) || 
                        (botones === 5 && accion === "Felicitacion" && (personaFelicitacion === "" || porqueFelicitacion === "" || reconocimientoFelicitacion === "")) || 
                        (botones === 6 && accion === "Queja o Reclamo" && queja === "") || 
                        (botones === 6 && accion === "Sugerencia" && sugerencia === "") || 
                        (botones === 6 && accion === "Denuncia" && (fechaDenuncia === "" || horaDenuncia === "" || lugarDenuncia === "" || descripcionDenuncia === "")) || 
                        (botones === 6 && accion === "Felicitacion" && (personaFelicitacion === "" || porqueFelicitacion === "" || reconocimientoFelicitacion === "")) || 
                        (comentario !== "")
                
                ? "bg-gray-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle" : 'bg-teal-700 hover:bg-teal-600 text-white font-bold rounded-full h-16 w-16 text-center flex items-center justify-center align-middle animate-bounce'}>
                    <button 
                        id="front" 
                        type="button" 
                        onClick={()=> comentario !== "" ? setBotones(botones + 0) : setBotones(botones + 1)} 
                        disabled={ 
                            (botones === 1 && accion ==="") || 
                            (botones === 2 && anonimato ==="") || 
                            (botones === 3 && anonimato ==="No" && (nombreEmpleado === "" || numeroEmpleado === "")) ||  
                            (botones === 3 && plaza === "") || 
                            (botones === 4 && plaza === "") || 
                            (botones === 4 && experience === "") || 
                            (botones === 5 && experience === "") || 
                            (botones === 5 && accion === "Queja o Reclamo" && queja === "") || 
                            (botones === 5 && accion === "Sugerencia" && sugerencia === "") || 
                            (botones === 5 && accion === "Denuncia" && (fechaDenuncia === "" || horaDenuncia === "" || lugarDenuncia === "" || descripcionDenuncia === "")) || 
                            (botones === 5 && accion === "Felicitacion" && (personaFelicitacion === "" || porqueFelicitacion === "" || reconocimientoFelicitacion === "")) || 
                            (botones === 6 && accion === "Queja o Reclamo" && queja === "") || 
                            (botones === 6 && accion === "Sugerencia" && sugerencia === "") || 
                            (botones === 6 && accion === "Denuncia" && (fechaDenuncia === "" || horaDenuncia === "" || lugarDenuncia === "" || descripcionDenuncia === "")) || 
                            (botones === 6 && accion === "Felicitacion" && (personaFelicitacion === "" || porqueFelicitacion === "" || reconocimientoFelicitacion === "")) || 
                            (comentario !== "") ? true : false}
                        >
                        <svg className="w-8 h-8 font-extrabold bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Botones