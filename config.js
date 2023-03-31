//aqui van valores globales que se listarán desde el archivo .env

import {config} from "dotenv" //dotenv fue la dependencia que se instaló

config(); //permitirá ejecutar las variablees de entorno


export default {
    host: process.env.HOST || "",   // se coloca el string vacio com buena practica
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "" 
}