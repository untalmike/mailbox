const Sugerencia = () => {
    return ( 
        <>
        <h1>Sugerencias</h1>
        <span className='text-xl'>Para TYT tu opinión es muy importante, por favor comparte tus sugerencias, sin duda nos será de gran apoyo para una mejora continua.</span>
                                        <textarea className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="bq_desc_suger"></textarea>
                        </>
    )
}

export default Sugerencia