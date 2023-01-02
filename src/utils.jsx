export async function consulta_Fetch(ruta, data_body = {}){
    /**
     * PRODUCCION
     * http://187.188.252.232:8082/satisfaccion_clientes/src/server/${ruta}
     */

    /**
     * DEV 
     * http://localhost/satisfaccion_clientes/src/server/${ruta}
     */
    try{
        const data = await fetch(`http://localhost/src/server/${ruta}`, {
            method: "POST",
            body: JSON.stringify(data_body)
        });
        var responseJson = await data.json();
        return {
            return: responseJson,
            estatus: true
        };
    }catch(e){
        return {
            estatus: false,
            return: {
                estatus: 'falla',
                comentarios: e.message
            }
        };
    }
}
