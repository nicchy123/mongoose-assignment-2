import { z } from 'zod'

const fullNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
})

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
})
const orderSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
}).optional()

const userZodSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: fullNameSchema,
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressSchema,
  orders: orderSchema,
})

export default userZodSchema;