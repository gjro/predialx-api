import { Router } from "express";
import ordensDeServicoControllers from "../controllers/ordensDeServico";

var router = Router();

router.get("/:id", ordensDeServicoControllers.show);
router.get("/", ordensDeServicoControllers.index);
router.post("/", ordensDeServicoControllers.create);
router.put("/:id", ordensDeServicoControllers.update);
router.delete("/:id", ordensDeServicoControllers.destroy);

export default router;
