import { Request, RequestHandler, Response } from 'express'
import { usersServices } from './user.service'
import userZodSchema from './user.validation'
import { IUser } from './user.interface'

const createUser: RequestHandler = async (req: Request, res: Response) => {
  const data = req.body
  const validatedData = userZodSchema.parse(data)
  const result = await usersServices.createUser(validatedData as IUser)
  res.status(200).json({
    data: result,
  })
}
const getAllusers: RequestHandler = async (req: Request, res: Response) => {
  const result = await usersServices.getAllusers()
  res.status(200).json({
    data: result,
  })
}

export const usersController = {
  createUser,
  getAllusers,
}
