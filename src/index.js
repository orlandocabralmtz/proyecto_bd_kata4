// se utilizará la aplicación creada en app.js
// se hace la importación 
import app from "./app";

// En esta función esta la ejecución del servidor creado
const main = () => {
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();
