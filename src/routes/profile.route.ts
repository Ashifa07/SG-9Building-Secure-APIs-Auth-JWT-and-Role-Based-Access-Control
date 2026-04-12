import { Router } from "express"
import * as controller from "../controllers/profile.controller"
import { validate } from "../middlewares/validation.middleware"
import { profileSchema } from "../types/profile"
import {authenticate} from "../middlewares/auth.middleware";
import {adminOnly} from "../middlewares/admin.middleware";


const router = Router()

router.get("/",
    authenticate,
    controller.getProfiles)
router.get("/:id",
    authenticate,
    controller.getProfileById)

router.post("/",
    authenticate,
    adminOnly,
    validate(profileSchema),
    controller.createProfile)
router.put("/:id",
    authenticate,
    adminOnly,
    validate(profileSchema),
    controller.updateProfile)
router.delete("/:id",
    authenticate,
    adminOnly,
    controller.deleteProfile)

export default router