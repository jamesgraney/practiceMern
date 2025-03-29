import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
    },
});
const User = model('user', userSchema);
export default User;
