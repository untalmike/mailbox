

const Bienvenida = ({botones}) => {
    return (
        <div className={botones === 1 ? "hidden": ""}>
            <h1 className="text-2xl py-4">Bienvenido al buzón de quejas y sugerencias</h1>
            <div className="text-xl italic font-semibold">
                <p>Esperamos te encuentres bien, este formulario es una herramienta para distintos temas, entre los cuales encontrarás:</p>
                <ul className="space-y-1 text-gray-400 list-disc list-inside text-lg mx-4">
                    <li>Posibilidades de realizar:
                        <ul className="space-y-1 text-gray-400 list-disc list-inside text-lg mx-4">
                            <li>Quejas o Reclamos</li>
                            <li>Sugerencias</li>
                            <li>Denuncias</li>
                            <li>Felicitaciones</li>
                        </ul>
                    </li>
                    <li>Generar reportes de forma anónima</li>
                    <li>Tener seguimiento a tu caso</li>
                    <li>Buscar ayuda con personas de confianza</li>
                </ul>
                <p>Todo lo registrado es bien recibido, trabajamos en atender tu petición y en que te sigas manteniendo feliz a nuestro lado</p>
                <p>En TYT trabajamos para cuidarte</p>
            </div>
        </div>
    )
}

export default Bienvenida