import { Router } from "express";
import clientesControllers from "../controllers/clientes";

var router = Router();

router.get("/:id", clientesControllers.show);
router.get("/", clientesControllers.index);
router.post("/", clientesControllers.create);
router.put("/:id", clientesControllers.update);
router.delete("/:id", clientesControllers.destroy);

export default router;
