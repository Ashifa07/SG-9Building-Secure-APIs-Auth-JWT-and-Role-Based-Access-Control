import { Router } from "express"
import * as controller from "../controllers/profile.controller"
import { validate } from "../middlewares/validation.middleware"
import { profileSchema } from "../types/profile"
import { authenticate } from "../middlewares/auth.middleware";
import {adminOnly} from "../middlewares/admin.middleware";



const router = Router()

router.get("/",
    controller.getProfiles)
router.get("/:id",
    controller.getProfileById)

router.post("/",
    validate(profileSchema),
    controller.createProfile)
router.put("/:id",
    validate(profileSchema),
    controller.updateProfile)
router.delete("/:id",
    controller.deleteProfile)

export default router