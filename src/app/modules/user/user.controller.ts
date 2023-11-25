/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express'
import { usersServices } from './user.service'
import { UserModel } from './user.model'
import IUser from './user.interface'
import { zodValidation } from './user.validation'

const createUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const validatedData = zodValidation.userZodSchema.parse(data)
    const result = await usersServices.createUser(validatedData as IUser)
    res.status(200).json({
      sucess: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    })
  }
}
const getAllusers: RequestHandler = async (req: Request, res: Response) => {
  const result = await usersServices.getAllusers()
  res.status(200).json({
    data: result,
  })
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.userId)
    if (await UserModel.isUserExists(id)) {
      const result = await usersServices.getSingleUser(id)
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      })
    } else {
      res.status(500).send({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      })
    }
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error?.message,
      error: error,
    })
  }
}

const getSingleUsersOrders = async (req: Request, res: Response) => {
  const id: number = Number(req.params.userId)
  if (await UserModel.isUserExists(id)) {
    const result = await usersServices.getSingleUsersOrders(id)
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    })
  } else {
    res.status(500).send({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

const getSingleUsersOrdersTotalPrice = async (req: Request, res: Response) => {
  const id: number = Number(req.params.userId)
  if (await UserModel.isUserExists(id)) {
    const result = await usersServices.getSingleUsersOrdersTotalPrice(id)
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    })
  } else {
    res.status(500).send({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.userId)
    if (await UserModel.isUserExists(id)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await usersServices.deleteUser(id)
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      })
    } else {
      res.status(500).send({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.userId)
    if (await UserModel.isUserExists(id)) {
      const data = req.body
      const validatedData = zodValidation.userUpdateZodSchema.parse(data)
      const result = await usersServices.updateUser(id, validatedData as IUser)
      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: result,
      })
    } else {
      res.status(500).send({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      })
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    })
  }
}


const createOrder = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.userId)
    const data = req.body
    const result = await usersServices.createOrder(id, data)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    })
  }
}

export const usersController = {
  createUser,
  getAllusers,
  getSingleUser,
  deleteUser,
  updateUser,
  createOrder,
  getSingleUsersOrders,
  getSingleUsersOrdersTotalPrice,
}
