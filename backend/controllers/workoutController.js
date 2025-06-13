import WorkoutModel from "../models/Workout.js";

const workoutController = {
    getAll: async (req, res, next) => {
        try {
            const workouts = await WorkoutModel.find().lean();
            if (!workouts) {
                res.status(400);
                return next(new Error(`Workouts not Found!`))
            }
            return res.status(200).json({ mess: 'success', result: workouts })
        } catch (error) {
            return next(error)
        }
    },
    create: async (req, res, next) => {
        try {
            const { title, read, load } = req.body;
            const workoutDoc = await WorkoutModel.create({ title, read, load });
            if (!workoutDoc) {
                res.status(400);
                return next(new Error(`Workout create fail!`))
            }
            return res.status(201).json({ mess: 'success', result: workoutDoc })
        } catch (error) {
            return next(error)
        }
    },
    getWorkout: async (req, res, next) => {
        try {
            const { id } = req.params;
            // const workout = await WorkoutModel.findOne({ _id: id }).lean();
            const workout = await WorkoutModel.findById(id).lean();
            if (!workout) {
                res.status(400);
                return next(new Error(`Workout not Found!`))
            }
            return res.status(200).json({ mess: 'success', result: workout })
        } catch (error) {
            return next(error)
        }
    },
    modify: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { title, read, load } = req.body;
            const workout = await WorkoutModel.findByIdAndUpdate(id, { title, read, load }).lean();
            if (!workout) {
                res.status(400);
                return next(new Error(`Workout modify fail!`))
            }
            return res.status(200).json({ mess: 'success', result: workout })
        } catch (error) {
            return next(error)
        }
    },
    drop: async (req, res, next) => {
        try {
            const { id } = req.params;
            const workout = await WorkoutModel.findByIdAndDelete(id, { rawResult: true }).select(['_id']).lean();
            if (!workout) {
                res.status(400);
                return next(new Error(`Workout drop fail!`))
            }
            return res.status(200).json({ mess: 'success', result: workout })
        } catch (error) {
            return next(error)
        }
    }
};

export default workoutController;