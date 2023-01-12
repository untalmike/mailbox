
const Personal = ({botones, respond_form, setRespond_form}) => {

    const {anonimato} = respond_form

    return (
        <div className={anonimato === "No" && botones === 3 ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-4 dark:text-gray-200">
                <h2 className="uppercase text-3xl">Datos personales</h2>
            </div>
            <div className="mx-auto w-screen-sm space-y-8">
                <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
                    <input 
                        type="text" 
                        className="peer w-full rounded-r-lg border border-slate-400 px-4 text-gray-700 placeholder-slate-400 transition-colors duration-300 focus:border-white focus:outline-none"
                        onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})}
                        name="nombreEmpleado"
                    />
                    <label className="whitespace-nowrap flex items-center rounded-l-lg border border-slate-400 bg-teal-800 px-4 text-lg text-white transition-colors duration-300 peer-focus:border-white peer-focus:bg-teal-700 peer-focus:text-white dark:text-gray-500">Nombre de empleado</label>
                </div>
                <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
                    <input 
                        type="text" 
                        className="peer w-full rounded-r-lg border border-slate-400 px-4 text-gray-700 placeholder-slate-400 transition-colors duration-300 focus:border-white focus:outline-none"
                        onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})}
                        name="numeroEmpleado"
                    />
                    <label className="whitespace-nowrap flex items-center rounded-l-lg border border-slate-400 bg-teal-800 px-4 text-lg text-white transition-colors duration-300 peer-focus:border-white peer-focus:bg-teal-700 peer-focus:text-white dark:text-gray-500">Número de empleado</label>
                </div>
            </div>
            
        </div>
    )
}

export default Personal