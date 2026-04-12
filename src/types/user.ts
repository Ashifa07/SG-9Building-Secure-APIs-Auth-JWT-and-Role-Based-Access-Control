import {z} from "zod"

export const userSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    passowrd: z.string().min(8),
    role: z.enum(["admin", "user"]),
})