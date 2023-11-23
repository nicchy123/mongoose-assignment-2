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
const getSingleUser = async (_id: string) => {
  const isExist = await UserModel.findById(_id)
  if (isExist) {
    const result = await UserModel.find({ _id }).select('-password')
    return result
  } else {
    throw new Error('user not found')
  }
}

export const usersServices = {
  createUser,
  getAllusers,
  getSingleUser,
}
