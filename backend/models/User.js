import { Schema, model } from "mongoose";
import { Bcrypt } from '../utils/helper.js';
import { JWT } from "../utils/helper.js";
import validator from 'validator'

const UserSchema = new Schema({
    name: { type: String, required: [true, 'username field is required'], trim: true },
    email: { type: String, required: [true, 'email field is required'], trim: true, unique: true },
    password: { type: String, required: true },
    age: { type: Schema.Types.Number },
    gender: { type: String },
    active: { type: Boolean, default: false }
}, { timestamps: true });

// UserSchema.index({ email: 1 });

// static register method  
UserSchema.statics.register = async function (name, email, password) {  // !note arrow fun is not work !!!
    if (!email || !password || !name) {
        throw new Error('Some Fields are required!')
    }
    if (!validator.isEmail(email)) {
        throw new Error('email field must be email')
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('password need to more strong!')
    }
    const exists = await this.findOne({ email });
    if (exists) {
        throw new Error('email is already in use!')
    }
    const hashPassword = Bcrypt.hash(password)
    const userDoc = await this.create({ name, email, password: hashPassword })
    return userDoc;
}

// static login method
UserSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw new Error('Some Fields are required!')
    }
    const user = await this.findOne({ email }).lean();
    if (!user) {
        throw new Error('email is not correct!')
    };
    if (!(Bcrypt.compare(password, user.password))) {
        throw new Error('Invalid password')
    }
    const token = JWT.gen_token({ id: user._id }, process.env.JWT_SECRET);
    if (!token) {
        throw new Error('Token generate Error!')
    };
    return token;
}

const UserModel = model('User', UserSchema, 'users');

export default UserModel;
