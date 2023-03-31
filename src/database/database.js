//conexion a la base de datos
import mysql from "promise-mysql"   //este modulo permite conectarse ala base de datos
import config from "./../../config" // se importa el archivo de configuración config.js

const connection  = mysql.createConnection({
    host:config.host,
    database:config.database,
    user:config.user,
    password:config.password
})

const getConnection =()=>{   // se retorna la conexión- proveerla
    return connection;
}

module.exports = {   //esportamos la funcion getConnection
    getConnection
}