import mongoose, { Schema } from 'mongoose'
import  IUser  from './user.interface'
import bcrypt from 'bcrypt'

const Userschema = new Schema<IUser>(
  {
    userId: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    hobbies: {
      type: [String],
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: false,
    toJSON: {
      virtuals: true,
    },
  },
)

Userschema.pre('save', async function (next) {
  const user = this as IUser
  user.password = await bcrypt.hash(user.password, 12)

  next()
})

Userschema.post('find', function (docs) {
  docs.forEach((doc: { password?: string }) => {
    if (doc && doc.password) {
      delete doc.password
    }
  })
  return docs
})
Userschema.post('findOne', function (docs) {
  docs.forEach((doc: { password?: string }) => {
    if (doc && doc.password) {
      delete doc.password
    }
  })
  return docs
})


export const UserModel = mongoose.model('User', Userschema)
