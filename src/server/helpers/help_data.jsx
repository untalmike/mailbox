import { consulta_Fetch } from '../../utils';

export default async function GetDataPlace(){
    var return_v = undefined;
    try{
        let data_query, data_query_arr = []

            data_query = await consulta_Fetch(`app_mysql_libre.php`, {
                query: `SELECT MAX(id) as Id FROM quejas;`
            });

            if(data_query.return.data.length > 0){
                data_query_arr.push(data_query.return.data[0])
            }

        if(Object.entries(data_query_arr).length > 0){
            const identificador = data_query_arr.filter(function(data_query_arr){ return data_query_arr })
            const data_query_array = {
                identificador: identificador,
            }
            return_v = data_query_array
        }

    }catch(e){
        console.error(e)
    }
    return return_v
}







