import Accion from './Accion'

const Formulario = ({motivo, setMotivo}) => {
    return (
        <div className="md:w-full text-gray-600 font-bold flex justify-center items-center py-4 flex-col">
            <h2 className="uppercase text-3xl py-8">Acción</h2>
            <form>
                <Accion
                    motivo={motivo}
                    setMotivo={setMotivo}
                />
                
            </form>
        </div>
    )
}

export default Formulario