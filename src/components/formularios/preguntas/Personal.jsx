
const Personal = ({botones, respond_form, setRespond_form}) => {

    const {anonimato} = respond_form

    return (
        <div className={anonimato === "No" && botones === 3 ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-12">
                <h2 className="uppercase text-3xl">Datos personales</h2>
            </div>
            <div className="grid space-y-5 space-x-2 p-2 sm:grid-cols-1 lg:grid-cols-1 gap-3">
                <div className="grid grid-rows-1">
                    <span className="text-xl">Nombre de empleado</span>
                    <input 
                        type="text" 
                        className="rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl"
                        onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})}
                        name="nombreEmpleado"
                    />
                </div>
                <div className="grid grid-rows-1">
                    <span className="text-xl">Número de empleado</span>
                    <input 
                        type="text" 
                        className="rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl"
                        onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})}
                        name="numeroEmpleado"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Personal