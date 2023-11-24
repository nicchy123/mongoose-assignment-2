import mongoose, { Schema } from 'mongoose'
import IUser, { IUserModel } from './user.interface'
import bcrypt from 'bcrypt'

const Userschema = new Schema<IUser, IUserModel>(
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
      // orders: [
      //   price: {
      //     type: Number,
      //     required: false,
      //   },
      //   quantity: {
      //     type: Number,
      //     required: false,
      //   },
      //   productName:{
      //     type:String,
      //     required: false,
      //   }
      // ],
    },
  },
  {
    timestamps: false,
    toJSON: {
      virtuals: true,
    },
  },
)


Userschema.statics.isUserExists= async function(userId:string){
  const existingUser = await UserModel.findOne({userId});
  return existingUser;
}
Userschema.pre('save', async function (next) {
  const user = this as IUser
  user.password = await bcrypt.hash(user.password, 12)
  next()
})



export const UserModel = mongoose.model<IUser, IUserModel>('User', Userschema)
