import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

export default User;