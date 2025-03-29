import {Schema, model} from 'mongoose';

interface IUser extends Document {
    username: string,
    email: string,
    password: string,
}

const userSchema = new Schema<IUser>(
    {
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
            match:[/.+\@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
        },
    }
);

const User = model('user', userSchema);
export default User;
