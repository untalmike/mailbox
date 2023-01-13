
const Comentarios = ({botones, respond_form, setRespond_form}) => {

    const { anonimato } = respond_form
    
    return (
        <div className={(anonimato === "Si" && botones === 6) || (anonimato === "No" && botones === 7) ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-4 dark:text-gray-200">
                <h2 className="uppercase text-3xl">Comentario final</h2>
            </div>
            <div className="">
                <span className='text-xl dark:text-gray-200'>Por último, añade un comentario final a tu reporte.</span>
                <div className="grid space-y-5 space-x-2 p-2 sm:grid-cols-1 lg:grid-cols-1 gap-3">
                    <div className='grid grid-rows-1'>
                        <textarea className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800 ' cols="30" rows="10" onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="comentario"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comentarios