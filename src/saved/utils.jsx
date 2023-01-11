export async function consulta_Fetch(ruta, data_body = {}){
    try{
        const data = await fetch(`http://localhost/buzon_quejas/src/server/${ruta}`, {
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

export async function consulta_FetchPHP(ruta, formulario){
    try{
        const data = await fetch(`http://localhost/buzon_quejas/src/server/${ruta}`, {
            method: "POST",
            body: formulario
        });
        var responseJson = await data.json();
        return responseJson;
    }catch(e){
        return {
            estatus: 'falla',
            comentarios: e,
        };
    }
}

