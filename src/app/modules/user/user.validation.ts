import { z } from 'zod'

const userZodSchema = z.object({
  name: z.string(),
  password: z.string(),
})

export default userZodSchema