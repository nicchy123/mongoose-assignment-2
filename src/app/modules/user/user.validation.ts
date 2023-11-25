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
const orderSchema = z
  .object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
  })
  .array()
  .optional()

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

const userUpdateZodSchema = z.object({
  userId: z.number().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  fullName: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  }),
  age: z.number().optional(),
  email: z.string().optional(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string()).optional(),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
  }),
  orders: orderSchema,
})

export const zodValidation = { userZodSchema, userUpdateZodSchema }