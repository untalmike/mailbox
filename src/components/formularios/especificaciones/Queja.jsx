
const Queja = ({respond_form, setRespond_form, botones}) => {

    const {accion, anonimato} = respond_form

    return (
        <div className={(accion === "Queja o Reclamo" && anonimato === "Si" && botones === 5) || (accion === "Queja o Reclamo" && anonimato === "No" && botones === 6) ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-4 dark:text-gray-200">
                <h2 className="uppercase text-3xl">Queja o Reclamo</h2>
            </div>
            <div className=" px-8">
                <span className='text-xl dark:text-gray-200'>Con la finalidad de presentar una mejora, por favor comparte amplia descripción de tu queja o reclamo, incluyendo detalles con fecha, hora, lugar, área o departamento, etc.</span>
                <div className="grid space-y-5 space-x-2 p-2 sm:grid-cols-1 lg:grid-cols-1 gap-3">
                    <div className='grid grid-rows-1'>
                        <textarea className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl dark:text-gray-800'  onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="queja"></textarea>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Queja