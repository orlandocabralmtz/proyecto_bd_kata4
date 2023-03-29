import express from "express";
import morgan from "morgan";
// Routes

// app es igual a la ejecución de express. Express nos deja crear un servidor que maneje rutas, peticiónes a traves de los verbos (get,post,put,delete,patch)
const app = express();

// Settings
// el puerto en donde se ejecutará el servidor.  localhost:3000
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));


// solo exporto app, quien tiene todo lo de express
export default app;
