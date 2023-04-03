// Aquí iran las interacciones con la base de datos

//importamos getconnection la cual permite conectarse al a base de datos
import { getConnection } from "./../database/database"


//async - await permiten indicar que una funcion es asincrona, es decir, los procesos demoran un tiempo. Debemos esperar a que finalice el bloque de codigo
const getLanguages = async (req, res) => {    // una funcion que permite listar lenguajes
    try {    // estructura de control try catch para control de fallos.
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM languages");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getLanguage = async (req, res) => {    // una funcion que permite listar lenguajes
    try {    // estructura de control try catch para control de fallos.
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM languages WHERE id = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const addLanguage = async (req, res) => {    // una funcion que permite listar lenguajes
    try {    // estructura de control try catch para control de fallos.
        const { name, programmers } = req.body;  // destructuring  para guardar nombre y programadores en 2 constantes

        if (name === undefined || programmers === undefined) {
            res.status(404).json({ message: "Bad request. Please fill all data" })
        }

        const language = { name, programmers };
        const connection = await getConnection(); //coneccion a la base de datos
        const result = await connection.query("INSERT INTO languages SET ?", language);
        res.json({ message: "Language Added" })
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateLanguage = async (req, res) => {    // una funcion que permite listar lenguajes
    try {    // estructura de control try catch para control de fallos.       
        const { id } = req.params;
        const { name, programmers } = req.body;  // destructuring  para guardar nombre y programadores en 2 constantes

        
        if (id===undefined || name === undefined || programmers === undefined) {
            res.status(404).json({ message: "Bad request. Please fill all data" })
        }
        const language = { id, name, programmers };
        const connection = await getConnection();
        const result = await connection.query("UPDATE languages SET ? WHERE id = ?", [language, id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteLanguage = async (req, res) => {    // una funcion que permite listar lenguajes
    try {    // estructura de control try catch para control de fallos.       
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM languages WHERE id = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}




export const methods = {
    getLanguages,
    getLanguage,
    deleteLanguage,
    updateLanguage,
    addLanguage
}