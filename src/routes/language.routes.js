// se maneja las rutas dedicada a los lenguajes en este caso (por la tabla)

import {Router} from "express"  // DESTRUCTURING - sacamos un objeto interno dentro de otro
import { methods as languageController } from "./../controllers/language.controllers";


const router = Router();  //enrutador para manejar las rutas de nuestro proyecto 

router.get("/", languageController.getLanguages);
router.post("/", languageController.addLanguage);
router.get("/:id", languageController.getLanguage);
router.delete("/:id", languageController.deleteLanguage);
router.put("/:id", languageController.updateLanguage);
export default router;  // exportando el enrutador
