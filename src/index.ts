import cors from 'cors'
import express, { Application } from 'express'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

//parsers
app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send({
    succes: 'true',
    message: 'server is running successfully',
  })
})
// application routes
app.use('/api/users', UserRoutes)

export default app
