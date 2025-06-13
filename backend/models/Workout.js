import { Schema, model } from "mongoose";

const WorkoutSchema = new Schema({
    title: { type: String, required: true, trim: true },
    read: { type: Number, required: [true, 'read field is required'] },
    load: { type: Number, required: true },
}, { timestamps: true });


const WorkoutModel = model('Workout', WorkoutSchema, 'workouts');

export default WorkoutModel;