const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({

	admin: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('User', userSchema);
userSchema.plugin(passportLocalMongoose);
