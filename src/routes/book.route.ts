import { Router } from "express"
import * as controller from "../controllers/book.controller"
import { validate } from "../middlewares/validation.middleware"
import { bookSchema } from "../types/book"
import { authenticate } from "../middlewares/auth.middleware"
import { adminOnly } from "../middlewares/admin.middleware"



const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    validate(bookSchema),controller.create)
    
router.put("/:id",
    controller.update)
router.delete("/:id",
    authenticate,
    adminOnly,
    controller.remove)

export default router