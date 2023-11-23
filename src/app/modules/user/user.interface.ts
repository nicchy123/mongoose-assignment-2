interface FullName {
  firstName: string
  lastName: string
}

interface Address {
  street: string
  city: string
  country: string
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
}

export default IUser
