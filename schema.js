const { Schema, model, models } = require('mongoose');

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});


module.exports = models.User || model('User', UserSchema);
