import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: [true, 'username field is required'], trim: true },
    email: { type: String, required: [true, 'email field is required'], trim: true, unique: true },
    password: { type: String, required: true, trim: true, lowercase: true },
    age: { type: Schema.Types.Number },
    gender: { type: String },
    active: { type: Boolean, default: false }
}, { timestamps: true });

// UserSchema.index({ email: 1 });

const UserModel = model('User', UserSchema, 'users');

export default UserModel;