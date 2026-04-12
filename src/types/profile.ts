import { z } from "zod"

export const profileSchema = z.object({
  bio: z.string(),
  authorId: z.number()
})