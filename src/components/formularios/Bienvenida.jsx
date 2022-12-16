

const Bienvenida = ({botones}) => {
    return (
        <div className={botones === 1 ? "hidden": ""}>
            <h1>Buzón de quejas y sugerencias</h1>
            <blockquote>
                <p>Estás en el buzón de quejas y sugerencias, espeeramos que te encuentres bien</p>
                <span>
                    <p>El formulario incluye distintas opciones para que describas a detalle tu situación</p>
                    <p>Podrás, entre varias cosas realizar quejas, denuncias, felicitaciones o sugerencias</p>
                </span>
                <p>Todas son bien recibidas y trabajamos en atender tu petición y asegurarnos que te encuentras bien</p>
                <p>En TYT trabajamos para cuidarte</p>
            </blockquote>
        </div>
    )
}

export default Bienvenida