
const Comentarios = ({setComentarios}) => {
    return (
        <textarea cols="30" rows="10" onChange={ e => setComentarios(e.target.value)}></textarea>
    )
}

export default Comentarios