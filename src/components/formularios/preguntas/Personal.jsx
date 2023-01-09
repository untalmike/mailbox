
const Personal = ({botones, anonimato, setNombreEmpleado, setNumeroEmpleado}) => {

    return (
        <div className={anonimato === "No" && botones === 3 ? "" : "hidden"}>
            <div className="text-center flex justify-center items-center align-middle py-12">
                <h2 className="uppercase text-3xl">Datos personales</h2>
            </div>
            <div className="flex space-x-8 px-8">
                <div className="relative z-0 mb-6 w-full group">
                    <input 
                        type="text" 
                        name="nombreEmpleado" 
                        id="nombreEmpleado"
                        className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={e => setNombreEmpleado(e.target.value)}
                    />
                    <span className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre de empleado</span>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input 
                        type="text" 
                        name="numeroEmpleado" 
                        id="numeroEmpleado" 
                        className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={ e => setNumeroEmpleado(e.target.value)}
                    />
                    <span className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de empleado</span>
                </div>
            </div>
            
        </div>
    )
}

export default Personal