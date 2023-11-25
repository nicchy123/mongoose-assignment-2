import IUser from './user.interface'
import { UserModel } from './user.model'

const createUser = async (data: IUser) => {
  const result = (await UserModel.create(data))
  return result
}
const getAllusers = async () => {
  const result = await UserModel.find({}).select('-password')
  return result
}
const deleteUser = async (userId: number) => {
  const result = await UserModel.deleteOne({ userId })
  return result
}
const getSingleUser = async (userId: number) => {
  const result = await UserModel.findOne({ userId }, { password: 0 })
  return result
}
const getSingleUsersOrdersTotalPrice = async (userId: number) => {
  const result = await UserModel.aggregate([
    {
      $match: { userId },
    },
    {
      $unwind: '$orders',
    },
    {
      $group: {
        _id: null,
        totalPrice: { $sum: '$orders.price' },
      },
    },
    {
      $project:{
        totalPrice:1, _id:0
      }
    }
  ])
  return result
}
const getSingleUsersOrders = async (userId: number) => {
  const result = await UserModel.findOne({ userId }, { orders: 1, _id: 0 })
  return result
}
const updateUser = async (userId: number, data: IUser) => {
  const result = await UserModel.findOneAndUpdate({ userId }, data, {
    new: true,
  }).select('-password')
  return result
}
const createOrder = async (userId: number, data: IUser) => {
  const result = await UserModel.findOneAndUpdate(
    { userId: Number(userId) },
    { $addToSet: { orders: data } },
    { new: true, upsert: false },
  )

  return result
}

export const usersServices = {
  createUser,
  getAllusers,
  getSingleUser,
  deleteUser,
  updateUser,
  createOrder,
  getSingleUsersOrders,
  getSingleUsersOrdersTotalPrice,
}
