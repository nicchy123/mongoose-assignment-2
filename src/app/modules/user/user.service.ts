import IUser from './user.interface'
import { UserModel } from './user.model'

const createUser = async (data: IUser) => {
  const result = await UserModel.create(data)
  return result
}
const getAllusers = async () => {
  const result = await UserModel.find({}).select('-password')
  return result
}
const deleteUser = async (userId: number) => {
  const result = await UserModel.updateOne({ userId })
  return result
}
const getSingleUser = async (userId: number) => {
  const result = await UserModel.findOne({ userId }, { password: 0 })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateUser = async (userId: any, data: any) => {
  const result = await UserModel.findOneAndUpdate({ userId }, data, {
    new: true,
  })
  return result
}

export const usersServices = {
  createUser,
  getAllusers,
  getSingleUser,
  deleteUser,
  updateUser,
}
