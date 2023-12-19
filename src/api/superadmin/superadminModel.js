import mongoose from 'mongoose'
const superAdminSchema = new mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
}, {
		timestamps: true
	});

const superAdminModel = mongoose.model('superadmin', superAdminSchema)

export default superAdminModel