
const Queja = () => {
    return ( 
        <div>
            <h1>Quejas</h1>
                <span className='text-xl'>Con la finalidad de presentar una mejora, por favor comparte amplia descripción de tu queja o reclamo, incluyendo detalles con fecha, hora, lugar, área o departamento, etc.</span>
                <textarea className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl'  onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})}  name="bq_desc_queja"></textarea>
        </div>
    )
}

export default Queja