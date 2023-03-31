// se maneja las rutas dedicada a los lenguajes en este caso (por la tabla)

import {Router} from "express"  // DESTRUCTURING - sacamos un objeto interno dentro de otro
import { methods as languageController } from "./../controllers/language.controllers";


const router = Router();  //enrutador para manejar las rutas de nuestro proyecto 

router.get("/", languageController.getLanguages);

export default router;  // exportando el enrutador
