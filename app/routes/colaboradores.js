import { Router } from "express";
import colaboradoresControllers from "../controllers/colaboradores";

var router = Router();

router.get("/:id", colaboradoresControllers.show);
router.get("/", colaboradoresControllers.index);
router.post("/", colaboradoresControllers.create);
router.put("/:id", colaboradoresControllers.update);
router.delete("/:id", colaboradoresControllers.destroy);

export default router;
