
const Comentarios = ({setComentarios}) => {
    return (
        <textarea className="hidden" cols="30" rows="10" onChange={ e => setComentarios(e.target.value)}></textarea>
    )
}

export default Comentarios