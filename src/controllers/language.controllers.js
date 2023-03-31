// Aquí iran las interacciones con la base de datos

//importamos getconnection la cual permite conectarse al a base de datos
import { getConnection } from "./../database/database"


//async - await permiten indicar que una funcion es asincrona, es decir, los procesos demoran un tiempo. Debemos esperar a que finalice el bloque de codigo
const getLanguages = async (req, res) =>{    // una funcion que permite listar lenguajes
    try{    // estructura de control try catch para control de fallos.
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM languages")
        console.log(result)
        res.json(result)
    } catch(error){
        res.status(500).send(error.message)
    }
}


export const methods ={
    getLanguages
}