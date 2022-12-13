
const Personal = ({setNombreEmpleado, setNumeroEmpleado}) => {
    return (
        <div className="flex items-center border-b border-black py-4 my-8 space-x-8 w-full px-8">
            <div className="relative z-0 mb-6 w-full group">
                <input 
                    type="text" 
                    name="nombreEmpleado" 
                    id="nombreEmpleado"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={e => setNombreEmpleado(e.target.value)}
                />
                <span className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</span>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input 
                    type="text" 
                    name="numeroEmpleado" 
                    id="numeroEmpleado" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={ e => setNumeroEmpleado(e.target.value)}
                />
                <span className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de empleado</span>
            </div>
        </div>
    )
}

export default Personal