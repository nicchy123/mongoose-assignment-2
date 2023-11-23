import express from 'express'
import { usersController } from './user.controller'
const router = express.Router()

router.post('/', usersController.createUser)

// router.get('/:studentId', usersController.getSingleStudent)

// router.delete('/:studentId', usersController.deleteStudent)

router.get('/', usersController.getAllusers)

export const UserRoutes = router
