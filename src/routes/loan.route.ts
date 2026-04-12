import { Router } from "express"
import * as controller from "../controllers/loan.controller"
import { validate } from "../middlewares/validation.middleware"
import { createLoanSchema } from "../types/loan"
import {authenticate} from "../middlewares/auth.middleware";
import {adminOnly} from "../middlewares/admin.middleware";


const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    authenticate,
    adminOnly,
    validate(createLoanSchema),
    controller.create)

router.patch("/:id/return",
    authenticate,
    adminOnly,
    controller.returnLoan)

router.delete("/:id",
    authenticate,
    adminOnly,
    controller.remove)

export default router