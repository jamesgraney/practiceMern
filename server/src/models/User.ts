import {Schema, model} from 'mongoose';
import bcrypt from 'bcrypt';
import { get } from 'http';

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
    },
    {
        timestamps: true,
        toJSON: {
           getters: true,
        },
        toObject: {
            getters: true,
        },
    }
);
        
userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
})

userSchema.methods.isCorrectPassword = async function(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
}

const User = model('user', userSchema);

export default User;
