import { Model } from "mongoose"

interface FullName {
  firstName: string
  lastName: string
}

interface Address {
  street: string
  city: string
  country: string
}
export interface IOrders {
  productName: string
  price: number
  quantity: number
}

interface IUser {
  userId: number
  username: string
  password: string
  fullName: FullName
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: Address
  orders?: IOrders[]
}
export interface IUserAfterCreate {
  userId: number
  username: string
  password?: string
  fullName: FullName
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: Address
  orders?: IOrders[]
}


export interface IUserModel extends Model<IUser>{
  isUserExists:(id:number) => Promise<IUser | null>
}


export default IUser
