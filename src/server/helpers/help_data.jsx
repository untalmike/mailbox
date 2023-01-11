import { consulta_Fetch } from '../../utils';
import JSONClientes from "../../media/clientes_url.json"

export default async function GetDataPlace(plaza, mes){
    var return_v = undefined;
    try{
        /*  */
        let data_query, promedios_totales, query_respondidos, data_query_arr = [], query_respondidos_arr = [], promedios_totales_arr = [], query_no_respondidos_arr = [], query_respondidos_arr_total = []
        const data_e = JSONClientes.filter((data)=>{return data.sitio === plaza})

        for (let data_c in data_e){
            data_query = await consulta_Fetch(`app_mysql_libre.php`, {
                query: `SELECT * FROM  satisfaccion_clientes WHERE MONTH(fecha_registro) = '${mes}' AND nombre = '${data_e[data_c].nombre}';`
            });

            promedios_totales = await consulta_Fetch(`app_mysql_libre.php`, {
                query: `SELECT SUM(p_0) AS 'p1_comunicacion', SUM(p_1) AS 'p2_comunicacion', SUM(p_2) AS 'p3_comunicacion', SUM(p_4) AS 'p1_atencion', SUM(p_5) AS 'p2_atencion', SUM(p_7) AS 'p1_desempeño', SUM(p_8) AS 'p2_desempeño', SUM(p_9) AS 'p3_desempeño', SUM(p_11) AS 'p1_eficiencia', SUM(p_12) AS 'p2_eficiencia', SUM(p_14) AS 'p1_seguridad', SUM(p_15) AS 'p2_seguridad', SUM(p_16) AS 'p3_seguridad', SUM(p_18) AS 'p1_mantenimiento', SUM(p_19) AS 'p2_mantenimiento', SUM(p_21) AS 'p1_mejora', SUM(p_22) AS 'p2_mejora' FROM satisfaccion_clientes WHERE MONTH(fecha_registro) = '${mes}' AND nombre = '${data_e[data_c].nombre}';`
            });


            if(data_query.return.data.length > 0){
                data_query_arr.push(data_query.return.data[0])
                query_respondidos_arr.push({'id': data_e[data_c].id, 'empresa': data_e[data_c].Empresa, 'nombre': data_e[data_c].nombre,  'puesto': data_e[data_c].Puesto, 'contesto': 'Si contesto'}) 
                query_respondidos_arr_total.push({'id': data_e[data_c].id, 'empresa': data_e[data_c].Empresa, 'nombre': data_e[data_c].nombre,  'puesto': data_e[data_c].Puesto, 'contesto': 'Si contesto'}) 
                promedios_totales_arr.push(promedios_totales.return.data[0])
            }else{
                query_no_respondidos_arr.push({'id': data_e[data_c].id, 'empresa': data_e[data_c].Empresa, 'nombre': data_e[data_c].nombre,  'puesto': data_e[data_c].Puesto, 'contesto': 'No contesto'})
                query_respondidos_arr_total.push({'id': data_e[data_c].id, 'empresa': data_e[data_c].Empresa, 'nombre': data_e[data_c].nombre,  'puesto': data_e[data_c].Puesto, 'contesto': 'No contesto'}) 
            }
        }

        if(Object.entries(data_query_arr).length > 0){
            //var extract_data_information = Object.entries(data_query_arr)
            const total_todos =Object.entries(data_query_arr).length
            var suma_comunicacion = 0, suma_atencion = 0, suma_desempeño = 0, suma_eficiencia = 0, suma_seguridad = 0, suma_mantenimiento = 0, suma_mejora = 0;
            var p1_comunicacion = 0, p2_comunicacion = 0, p3_comunicacion = 0, p1_atencion = 0, p2_atencion = 0, p1_desempeño = 0, p2_desempeño = 0, p3_desempeño = 0, p1_eficiencia = 0, p2_eficiencia = 0,  p1_seguridad = 0, p2_seguridad = 0, p3_seguridad = 0, p1_mantenimiento = 0, p2_mantenimiento = 0, p1_mejora = 0, p2_mejora = 0

            const p1_comunicacion_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '10' })
            const p1_comunicacion_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '9' })
            const p1_comunicacion_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '8' })
            const p1_comunicacion_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '7' })
            const p1_comunicacion_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '6' })
            const p1_comunicacion_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '5' })
            const p1_comunicacion_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '4' })
            const p1_comunicacion_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '3' })
            const p1_comunicacion_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '2' })
            const p1_comunicacion_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_0 === '1' })

            const p2_comunicacion_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '10' })
            const p2_comunicacion_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '9' })
            const p2_comunicacion_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '8' })
            const p2_comunicacion_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '7' })
            const p2_comunicacion_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '6' })
            const p2_comunicacion_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '5' })
            const p2_comunicacion_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '4' })
            const p2_comunicacion_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '3' })
            const p2_comunicacion_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '2' })
            const p2_comunicacion_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_1 === '1' })

            const p3_comunicacion_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '10' })
            const p3_comunicacion_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '9' })
            const p3_comunicacion_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '8' })
            const p3_comunicacion_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '7' })
            const p3_comunicacion_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '6' })
            const p3_comunicacion_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '5' })
            const p3_comunicacion_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '4' })
            const p3_comunicacion_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '3' })
            const p3_comunicacion_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '2' })
            const p3_comunicacion_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_2 === '1' })

            const p4_atencion_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '10' })
            const p4_atencion_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '9' })
            const p4_atencion_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '8' })
            const p4_atencion_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '7' })
            const p4_atencion_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '6' })
            const p4_atencion_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '5' })
            const p4_atencion_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '4' })
            const p4_atencion_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '3' })
            const p4_atencion_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '2' })
            const p4_atencion_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_4 === '1' })

            const p5_atencion_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '10' })
            const p5_atencion_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '9' })
            const p5_atencion_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '8' })
            const p5_atencion_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '7' })
            const p5_atencion_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '6' })
            const p5_atencion_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '5' })
            const p5_atencion_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '4' })
            const p5_atencion_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '3' })
            const p5_atencion_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '2' })
            const p5_atencion_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_5 === '1' })

            const p6_desempeño_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '10' })
            const p6_desempeño_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '9' })
            const p6_desempeño_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '8' })
            const p6_desempeño_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '7' })
            const p6_desempeño_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '6' })
            const p6_desempeño_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '5' })
            const p6_desempeño_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '4' })
            const p6_desempeño_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '3' })
            const p6_desempeño_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '2' })
            const p6_desempeño_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_7 === '1' })

            const p7_desempeño_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '10' })
            const p7_desempeño_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '9' })
            const p7_desempeño_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '8' })
            const p7_desempeño_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '7' })
            const p7_desempeño_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '6' })
            const p7_desempeño_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '5' })
            const p7_desempeño_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '4' })
            const p7_desempeño_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '3' })
            const p7_desempeño_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '2' })
            const p7_desempeño_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_8 === '1' })
            
            const p8_desempeño_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '10' })
            const p8_desempeño_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '9' })
            const p8_desempeño_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '8' })
            const p8_desempeño_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '7' })
            const p8_desempeño_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '6' })
            const p8_desempeño_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '5' })
            const p8_desempeño_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '4' })
            const p8_desempeño_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '3' })
            const p8_desempeño_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '2' })
            const p8_desempeño_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_9 === '1' })

            const p9_eficiencia_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '10' })
            const p9_eficiencia_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '9' })
            const p9_eficiencia_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '8' })
            const p9_eficiencia_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '7' })
            const p9_eficiencia_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '6' })
            const p9_eficiencia_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '5' })
            const p9_eficiencia_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '4' })
            const p9_eficiencia_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '3' })
            const p9_eficiencia_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '2' })
            const p9_eficiencia_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_11 === '1' })

            const p10_eficiencia_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '10' })
            const p10_eficiencia_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '9' })
            const p10_eficiencia_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '8' })
            const p10_eficiencia_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '7' })
            const p10_eficiencia_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '6' })
            const p10_eficiencia_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '5' })
            const p10_eficiencia_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '4' })
            const p10_eficiencia_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '3' })
            const p10_eficiencia_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '2' })
            const p10_eficiencia_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_12 === '1' })

            const p11_seguridadti_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '10' })
            const p11_seguridadti_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '9' })
            const p11_seguridadti_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '8' })
            const p11_seguridadti_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '7' })
            const p11_seguridadti_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '6' })
            const p11_seguridadti_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '5' })
            const p11_seguridadti_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '4' })
            const p11_seguridadti_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '3' })
            const p11_seguridadti_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '2' })
            const p11_seguridadti_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_14 === '1' })

            const p12_seguridadti_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '10' })
            const p12_seguridadti_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '9' })
            const p12_seguridadti_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '8' })
            const p12_seguridadti_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '7' })
            const p12_seguridadti_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '6' })
            const p12_seguridadti_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '5' })
            const p12_seguridadti_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '4' })
            const p12_seguridadti_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '3' })
            const p12_seguridadti_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '2' })
            const p12_seguridadti_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_15 === '1' })
            
            const p13_seguridadti_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '10' })
            const p13_seguridadti_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '9' })
            const p13_seguridadti_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '8' })
            const p13_seguridadti_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '7' })
            const p13_seguridadti_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '6' })
            const p13_seguridadti_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '5' })
            const p13_seguridadti_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '4' })
            const p13_seguridadti_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '3' })
            const p13_seguridadti_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '2' })
            const p13_seguridadti_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_16 === '1' })

            const p14_mantenimiento_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '10' })
            const p14_mantenimiento_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '9' })
            const p14_mantenimiento_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '8' })
            const p14_mantenimiento_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '7' })
            const p14_mantenimiento_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '6' })
            const p14_mantenimiento_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '5' })
            const p14_mantenimiento_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '4' })
            const p14_mantenimiento_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '3' })
            const p14_mantenimiento_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '2' })
            const p14_mantenimiento_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_18 === '1' })

            const p15_mantenimiento_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '10' })
            const p15_mantenimiento_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '9' })
            const p15_mantenimiento_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '8' })
            const p15_mantenimiento_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '7' })
            const p15_mantenimiento_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '6' })
            const p15_mantenimiento_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '5' })
            const p15_mantenimiento_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '4' })
            const p15_mantenimiento_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '3' })
            const p15_mantenimiento_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '2' })
            const p15_mantenimiento_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_19 === '1' })

            const p16_mejora_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '10' })
            const p16_mejora_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '9' })
            const p16_mejora_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '8' })
            const p16_mejora_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '7' })
            const p16_mejora_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '6' })
            const p16_mejora_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '5' })
            const p16_mejora_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '4' })
            const p16_mejora_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '3' })
            const p16_mejora_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '2' })
            const p16_mejora_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_21 === '1' })
            
            const p17_mejora_p10 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '10' })
            const p17_mejora_p9 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '9' })
            const p17_mejora_p8 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '8' })
            const p17_mejora_p7 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '7' })
            const p17_mejora_p6 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '6' })
            const p17_mejora_p5 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '5' })
            const p17_mejora_p4 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '4' })
            const p17_mejora_p3 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '3' })
            const p17_mejora_p2 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '2' })
            const p17_mejora_p1 = data_query_arr.filter(function(data_query_arr){ return data_query_arr.p_22 === '1' })
            
            p1_comunicacion = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_0), 0) / total_todos);
            p2_comunicacion = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_1), 0) / total_todos);
            console.log(data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_2), 0))
            p3_comunicacion = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_2), 0) / total_todos);

            p1_atencion = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_4), 0) / total_todos);
            p2_atencion = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_5), 0) / total_todos);

            p1_desempeño = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_7), 0) / total_todos);
            p2_desempeño = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_8), 0) / total_todos);
            p3_desempeño = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_9), 0) / total_todos);

            p1_eficiencia = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_11), 0) / total_todos);
            p2_eficiencia = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_12), 0) / total_todos);

            p1_seguridad = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_14), 0) / total_todos);
            p2_seguridad = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_15), 0) / total_todos);
            p3_seguridad = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_16), 0) / total_todos);

            p1_mantenimiento = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_18), 0) / total_todos);
            p2_mantenimiento = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_19), 0) / total_todos);

            p1_mejora = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_21), 0) / total_todos);
            p2_mejora = (data_query_arr.reduce((acumulador, actual) => acumulador + parseInt(actual.p_22), 0) / total_todos);

            suma_comunicacion = (p1_comunicacion + p2_comunicacion + p3_comunicacion) / 3
            suma_atencion = (p1_atencion + p2_atencion) / 2
            suma_desempeño = (p1_desempeño + p2_desempeño + p3_desempeño) / 3
            suma_eficiencia = (p1_eficiencia + p2_eficiencia) / 2
            suma_seguridad = ( p1_seguridad + p2_seguridad + p3_seguridad) / 3
            suma_mantenimiento = (p1_mantenimiento + p2_mantenimiento) / 2
            suma_mejora = (p1_mejora + p2_mejora) / 2 

            const data_query_array = {
                estadisticas:{
                    respondieron_total: query_respondidos_arr.length + query_no_respondidos_arr.length, 
                    respondidos_si: query_respondidos_arr.length, 
                    respondidos_no: query_no_respondidos_arr.length, 
                },
                todos_contestaron: query_respondidos_arr_total,
                pregunta_1:{
                    p1_com_p10:p1_comunicacion_p10.length,
                    p1_com_p9:p1_comunicacion_p9.length,
                    p1_com_p8:p1_comunicacion_p8.length,
                    p1_com_p7:p1_comunicacion_p7.length,
                    p1_com_p6:p1_comunicacion_p6.length,
                    p1_com_p5:p1_comunicacion_p5.length,
                    p1_com_p4:p1_comunicacion_p4.length,
                    p1_com_p3:p1_comunicacion_p3.length,
                    p1_com_p2:p1_comunicacion_p2.length,
                    p1_com_p1:p1_comunicacion_p1.length
                },
                pregunta_2:{
                    p2_com_p10:p2_comunicacion_p10.length,
                    p2_com_p9:p2_comunicacion_p9.length,
                    p2_com_p8:p2_comunicacion_p8.length,
                    p2_com_p7:p2_comunicacion_p7.length,
                    p2_com_p6:p2_comunicacion_p6.length,
                    p2_com_p5:p2_comunicacion_p5.length,
                    p2_com_p4:p2_comunicacion_p4.length,
                    p2_com_p3:p2_comunicacion_p3.length,
                    p2_com_p2:p2_comunicacion_p2.length,
                    p2_com_p1:p2_comunicacion_p1.length
                },
                pregunta_3:{
                    p3_com_p10:p3_comunicacion_p10.length,
                    p3_com_p9:p3_comunicacion_p9.length,
                    p3_com_p8:p3_comunicacion_p8.length,
                    p3_com_p7:p3_comunicacion_p7.length,
                    p3_com_p6:p3_comunicacion_p6.length,
                    p3_com_p5:p3_comunicacion_p5.length,
                    p3_com_p4:p3_comunicacion_p4.length,
                    p3_com_p3:p3_comunicacion_p3.length,
                    p3_com_p2:p3_comunicacion_p2.length,
                    p3_com_p1:p3_comunicacion_p1.length
                },
                pregunta_4:{
                    p4_ate_p10:p4_atencion_p10.length,
                    p4_ate_p9:p4_atencion_p9.length,
                    p4_ate_p8:p4_atencion_p8.length,
                    p4_ate_p7:p4_atencion_p7.length,
                    p4_ate_p6:p4_atencion_p6.length,
                    p4_ate_p5:p4_atencion_p5.length,
                    p4_ate_p4:p4_atencion_p4.length,
                    p4_ate_p3:p4_atencion_p3.length,
                    p4_ate_p2:p4_atencion_p2.length,
                    p4_ate_p1:p4_atencion_p1.length
                },
                pregunta_5:{
                    p5_ate_p10:p5_atencion_p10.length,
                    p5_ate_p9:p5_atencion_p9.length,
                    p5_ate_p8:p5_atencion_p8.length,
                    p5_ate_p7:p5_atencion_p7.length,
                    p5_ate_p6:p5_atencion_p6.length,
                    p5_ate_p5:p5_atencion_p5.length,
                    p5_ate_p4:p5_atencion_p4.length,
                    p5_ate_p3:p5_atencion_p3.length,
                    p5_ate_p2:p5_atencion_p2.length,
                    p5_ate_p1:p5_atencion_p1.length
                },
                pregunta_6:{
                    p6_des_p10:p6_desempeño_p10.length,
                    p6_des_p9:p6_desempeño_p9.length,
                    p6_des_p8:p6_desempeño_p8.length,
                    p6_des_p7:p6_desempeño_p7.length,
                    p6_des_p6:p6_desempeño_p6.length,
                    p6_des_p5:p6_desempeño_p5.length,
                    p6_des_p4:p6_desempeño_p4.length,
                    p6_des_p3:p6_desempeño_p3.length,
                    p6_des_p2:p6_desempeño_p2.length,
                    p6_des_p1:p6_desempeño_p1.length
                },
                pregunta_7:{
                    p7_des_p10:p7_desempeño_p10.length,
                    p7_des_p9:p7_desempeño_p9.length,
                    p7_des_p8:p7_desempeño_p8.length,
                    p7_des_p7:p7_desempeño_p7.length,
                    p7_des_p6:p7_desempeño_p6.length,
                    p7_des_p5:p7_desempeño_p5.length,
                    p7_des_p4:p7_desempeño_p4.length,
                    p7_des_p3:p7_desempeño_p3.length,
                    p7_des_p2:p7_desempeño_p2.length,
                    p7_des_p1:p7_desempeño_p1.length
                },
                pregunta_8:{
                    p8_des_p10:p8_desempeño_p10.length,
                    p8_des_p9:p8_desempeño_p9.length,
                    p8_des_p8:p8_desempeño_p8.length,
                    p8_des_p7:p8_desempeño_p7.length,
                    p8_des_p6:p8_desempeño_p6.length,
                    p8_des_p5:p8_desempeño_p5.length,
                    p8_des_p4:p8_desempeño_p4.length,
                    p8_des_p3:p8_desempeño_p3.length,
                    p8_des_p2:p8_desempeño_p2.length,
                    p8_des_p1:p8_desempeño_p1.length
                },
                pregunta_9:{
                    p9_efi_p10:p9_eficiencia_p10.length,
                    p9_efi_p9:p9_eficiencia_p9.length,
                    p9_efi_p8:p9_eficiencia_p8.length,
                    p9_efi_p7:p9_eficiencia_p7.length,
                    p9_efi_p6:p9_eficiencia_p6.length,
                    p9_efi_p5:p9_eficiencia_p5.length,
                    p9_efi_p4:p9_eficiencia_p4.length,
                    p9_efi_p3:p9_eficiencia_p3.length,
                    p9_efi_p2:p9_eficiencia_p2.length,
                    p9_efi_p1:p9_eficiencia_p1.length
                },
                pregunta_10:{
                    p10_efi_p10:p10_eficiencia_p10.length,
                    p10_efi_p9:p10_eficiencia_p9.length,
                    p10_efi_p8:p10_eficiencia_p8.length,
                    p10_efi_p7:p10_eficiencia_p7.length,
                    p10_efi_p6:p10_eficiencia_p6.length,
                    p10_efi_p5:p10_eficiencia_p5.length,
                    p10_efi_p4:p10_eficiencia_p4.length,
                    p10_efi_p3:p10_eficiencia_p3.length,
                    p10_efi_p2:p10_eficiencia_p2.length,
                    p10_efi_p1:p10_eficiencia_p1.length
                },
                pregunta_11:{
                    p11_seg_p10:p11_seguridadti_p10.length,
                    p11_seg_p9:p11_seguridadti_p9.length,
                    p11_seg_p8:p11_seguridadti_p8.length,
                    p11_seg_p7:p11_seguridadti_p7.length,
                    p11_seg_p6:p11_seguridadti_p6.length,
                    p11_seg_p5:p11_seguridadti_p5.length,
                    p11_seg_p4:p11_seguridadti_p4.length,
                    p11_seg_p3:p11_seguridadti_p3.length,
                    p11_seg_p2:p11_seguridadti_p2.length,
                    p11_seg_p1:p11_seguridadti_p1.length
                },
                pregunta_12:{
                    p12_seg_p10:p12_seguridadti_p10.length,
                    p12_seg_p9:p12_seguridadti_p9.length,
                    p12_seg_p8:p12_seguridadti_p8.length,
                    p12_seg_p7:p12_seguridadti_p7.length,
                    p12_seg_p6:p12_seguridadti_p6.length,
                    p12_seg_p5:p12_seguridadti_p5.length,
                    p12_seg_p4:p12_seguridadti_p4.length,
                    p12_seg_p3:p12_seguridadti_p3.length,
                    p12_seg_p2:p12_seguridadti_p2.length,
                    p12_seg_p1:p12_seguridadti_p1.length
                },
                pregunta_13:{
                    p13_seg_p10:p13_seguridadti_p10.length,
                    p13_seg_p9:p13_seguridadti_p9.length,
                    p13_seg_p8:p13_seguridadti_p8.length,
                    p13_seg_p7:p13_seguridadti_p7.length,
                    p13_seg_p6:p13_seguridadti_p6.length,
                    p13_seg_p5:p13_seguridadti_p5.length,
                    p13_seg_p4:p13_seguridadti_p4.length,
                    p13_seg_p3:p13_seguridadti_p3.length,
                    p13_seg_p2:p13_seguridadti_p2.length,
                    p13_seg_p1:p13_seguridadti_p1.length
                },
                pregunta_14:{
                    p14_man_p10:p14_mantenimiento_p10.length,
                    p14_man_p9:p14_mantenimiento_p9.length,
                    p14_man_p8:p14_mantenimiento_p8.length,
                    p14_man_p7:p14_mantenimiento_p7.length,
                    p14_man_p6:p14_mantenimiento_p6.length,
                    p14_man_p5:p14_mantenimiento_p5.length,
                    p14_man_p4:p14_mantenimiento_p4.length,
                    p14_man_p3:p14_mantenimiento_p3.length,
                    p14_man_p2:p14_mantenimiento_p2.length,
                    p14_man_p1:p14_mantenimiento_p1.length
                },
                pregunta_15:{
                    p15_man_p10:p15_mantenimiento_p10.length,
                    p15_man_p9:p15_mantenimiento_p9.length,
                    p15_man_p8:p15_mantenimiento_p8.length,
                    p15_man_p7:p15_mantenimiento_p7.length,
                    p15_man_p6:p15_mantenimiento_p6.length,
                    p15_man_p5:p15_mantenimiento_p5.length,
                    p15_man_p4:p15_mantenimiento_p4.length,
                    p15_man_p3:p15_mantenimiento_p3.length,
                    p15_man_p2:p15_mantenimiento_p2.length,
                    p15_man_p1:p15_mantenimiento_p1.length
                },
                pregunta_16:{
                    p16_mej_p10:p16_mejora_p10.length,
                    p16_mej_p9:p16_mejora_p9.length,
                    p16_mej_p8:p16_mejora_p8.length,
                    p16_mej_p7:p16_mejora_p7.length,
                    p16_mej_p6:p16_mejora_p6.length,
                    p16_mej_p5:p16_mejora_p5.length,
                    p16_mej_p4:p16_mejora_p4.length,
                    p16_mej_p3:p16_mejora_p3.length,
                    p16_mej_p2:p16_mejora_p2.length,
                    p16_mej_p1:p16_mejora_p1.length
                },
                pregunta_17:{
                    p17_mej_p10:p17_mejora_p10.length,
                    p17_mej_p9:p17_mejora_p9.length,
                    p17_mej_p8:p17_mejora_p8.length,
                    p17_mej_p7:p17_mejora_p7.length,
                    p17_mej_p6:p17_mejora_p6.length,
                    p17_mej_p5:p17_mejora_p5.length,
                    p17_mej_p4:p17_mejora_p4.length,
                    p17_mej_p3:p17_mejora_p3.length,
                    p17_mej_p2:p17_mejora_p2.length,
                    p17_mej_p1:p17_mejora_p1.length
                },
                tablero_clientes: data_query_arr,
                suma_comunicacion, 
                suma_atencion, 
                suma_desempeño, 
                suma_eficiencia, 
                suma_seguridad, 
                suma_mantenimiento, 
                suma_mejora 
            }
            return_v = data_query_array
            //console.log(return_v)
        }

    }catch(e){
        console.error(e)
    }
    return return_v
}







