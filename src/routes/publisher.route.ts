import { Router } from "express"
import * as controller from "../controllers/publisher.controller"
import {authenticate} from "../middlewares/auth.middleware";
import {adminOnly} from "../middlewares/admin.middleware";

const router = Router()

router.get("/", controller.findAll)
router.post("/", 
    authenticate,
    adminOnly,
    controller.create)
router.put("/:id",
    authenticate,
    adminOnly,
    controller.update)
router.delete("/:id",
    authenticate,
    adminOnly,
    controller.remove)

export default router