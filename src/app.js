import express from "express";
import morgan from "morgan";
// Routes

import languageRoutes from "./routes/language.routes"

// app es igual a la ejecución de express. Express nos deja crear un servidor que maneje rutas, peticiónes a traves de los verbos (get,post,put,delete,patch)
const app = express();

// Settings
// el puerto en donde se ejecutará el servidor.  localhost:3000
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));

//Routes   ---- uso las rutas desde mi app
app.use("/api/languages", languageRoutes)  //especificamos la ruta principal de la apo


// solo exporto app, quien tiene todo lo de express
export default app;
