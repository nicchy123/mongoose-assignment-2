import { Request, RequestHandler, Response } from 'express'
import { usersServices } from './user.service'
import userZodSchema from './user.validation'
import IUser from './user.interface'

const createUser: RequestHandler = async (req: Request, res: Response) => {
  const data = req.body
  const validatedData = userZodSchema.parse(data)
  const result = await usersServices.createUser(validatedData as IUser)
  res.status(200).json({
    sucess: true,
    message: 'User created successfully!',
    data: result,
  })
}
const getAllusers: RequestHandler = async (req: Request, res: Response) => {
  const result = await usersServices.getAllusers()
  res.status(200).json({
    data: result,
  })
}

const getSingleUser = async (req: Request, res: Response) => {
  const id: number = Number(req.params.userId)
  const result = await usersServices.getSingleUser(id)
  res.status(200).json({
    success: true,
    message: 'User fetched successfully!',
    data: result,
  })
}

const deleteUser = async (req: Request, res: Response) => {
  const id: number = Number(req.params.userId)
  const result = await usersServices.deleteUser(id)
  res.status(200).json({
    success: true,
    message: 'User deleted successfully!',
    data: result,
  })
}

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.userId
  const data = req.body
  const result = await usersServices.updateUser( id, data )
  res.status(200).json({
    success: true,
    message: 'User updated successfully!',
    data: result,
  })
}


export const usersController = {
  createUser,
  getAllusers,
  getSingleUser,
  deleteUser,
  updateUser,
}
