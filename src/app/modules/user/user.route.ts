import express from 'express'
import { usersController } from './user.controller'
const router = express.Router()

router.post('/', usersController.createUser)

router.get('/:userId', usersController.getSingleUser)

router.delete('/:userId', usersController.deleteUser)

router.get('/', usersController.getAllusers)

router.put('/:userId', usersController.updateUser)

router.put('/:userId/orders', usersController.createOrder)

export const UserRoutes = router;
