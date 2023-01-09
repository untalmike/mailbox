const Felicitacion = () => {
    return ( 
        <>
        <h1>Felicitacion</h1>
        <div className='grid grid-rows-1'>
                                                <span className='text-xl'>¿Cuál es la persona o área a la que deseas extender tu felicitación? </span>
                                                <input type="text" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="bq_desc_felic_person"/>
                                            </div>
                                            <div className='grid grid-rows-1'>
                                                <span className='text-xl'>¿Cuéntanos porque quieres felicitarlo? </span>
                                                <input type="text" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="bq_desc_felic_razon"/>
                                            </div>
                                            <div className='grid grid-rows-1'>
                                                <span className='text-xl'>¿Te gustaría que se entregue un reconocimiento público por estas acciones? </span>
                                                <input type="text" className='rounded-xl text-xl border-b-gray-300 mt-6 outline-none p-4 shadow-xl' onChange={(event) => setRespond_form({...respond_form, [event.target.name] : event.target.value})} name="bq_desc_felic_recon"/>
                                            </div>
        </>
    )
}

export default Felicitacion