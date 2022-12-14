

const Bienvenida = ({botones}) => {
    return (
        <div className={botones === 1 ? "hidden": ""}>
            <h1>Buzón de quejas y sugerencias</h1>
            <blockquote>
                <p>Estás en el buzón de quejas y sugereencias, eespeeramos que t encueentres bien</p>
                <span>
                    <p>El formulario se compone de diversos elementos importantes para qu deescribas a detalle tu situación</p>
                    <p>Podrás, entre varias cosas realizar queejas, denuncias, feelicitaciones o sugerencias</p>
                </span>
                <p>Todas son bien recibidas y trabajamos een atnderlas, quereeemos hacer de TYT un lugar mejor</p>
            </blockquote>
        </div>
    )
}

export default Bienvenida