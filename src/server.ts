import mongoose from 'mongoose'
import config from './config'
import app from '.'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`)
    })
  } catch (e) {
    console.log('database connection failed')
  }
}
bootstrap();
