import { Router } from "express"
import * as controller from "../controllers/member.controller"
import { validate } from "../middlewares/validation.middleware"
import { createMemberSchema } from "../types/member"
import {authenticate} from "../middlewares/auth.middleware";
import {adminOnly} from "../middlewares/admin.middleware";


const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    authenticate,
    adminOnly,
    validate(createMemberSchema),
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