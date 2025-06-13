import UserModel from "../models/User.js";

const authController = {
    register: async (req, res, next) => {
        try {
            const { name, email, age, gender, active, password } = req.body;

            const userDoc = await UserModel.create({ name, email, age, gender, active, password });
            if (!userDoc) {
                res.status(400);
                return next(new Error('Resgister Fail!'))
            }
            return res.status(201).json({
                mess: 'success',
                result: userDoc
            })
        } catch (error) {
            return next(error)
        }
    },
}

export default authController;