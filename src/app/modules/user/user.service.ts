import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser= async(data:IUser)=>{
   const result = await UserModel.create(data);
   return result;
}
const getAllusers = async () => {
  const result = await UserModel.find({})
  return result
}

export const usersServices = {
  createUser,
  getAllusers
}