import { Router } from "express"
import * as controller from "../controllers/author.controller"
import { validate } from "../middlewares/validation.middleware"
import { authorSchema } from "../types/author"
import { authenticate } from "../middlewares/auth.middleware";
import {adminOnly} from "../middlewares/admin.middleware";




const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    authenticate,
    adminOnly,
    validate(authorSchema),
    controller.create)
router.put("/:id",
    validate(authorSchema),
    controller.update)
router.delete("/:id",
    authenticate,
    adminOnly,
    controller.remove)

export default router