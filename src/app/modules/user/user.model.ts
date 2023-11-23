import mongoose, { Schema } from 'mongoose'
import { IUser } from './user.interface'
import bcrypt from 'bcrypt'

// Schema
const Userschema = new Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true }, 
})

Userschema.pre('save', async function (next) {
  const user = this as IUser
  user.password = await bcrypt.hash(user.password, 12)

  next()
})

Userschema.pre('find', async function (next) {
  const user = this.find 
 console.log( this)

  next()
})

export const UserModel = mongoose.model('User', Userschema)
