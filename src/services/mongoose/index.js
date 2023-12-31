import Promise from 'bluebird'
import mongoose from 'mongoose'
import { mongo } from '../../config'



mongoose.Promise = Promise

mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() }
}

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
})

export default mongoose
