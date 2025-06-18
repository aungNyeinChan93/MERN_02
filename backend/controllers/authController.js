import UserModel from "../models/User.js";
import { Bcrypt, JWT } from '../utils/helper.js'

const authController = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            const userDoc = await UserModel.register(name, email, password);
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
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const token = await UserModel.login(email, password);
            return res.status(200).json({
                mess: 'success',
                result: token
            })
        } catch (error) {
            return next(error)
        }
    },

}

export default authController;