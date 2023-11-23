import mongoose, { Schema } from 'mongoose'
import { IUser } from './user.interface'
import bcrypt from 'bcrypt'

const Userschema = new Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true }, 
})

Userschema.pre('save', async function (next) {
  const user = this as IUser
  user.password = await bcrypt.hash(user.password, 12)

  next()
})

Userschema.post('find', function (docs) {
  docs.forEach((doc: { password: string }) => { 
    doc.password = ''
  })

  return docs
})


export const UserModel = mongoose.model('User', Userschema)
