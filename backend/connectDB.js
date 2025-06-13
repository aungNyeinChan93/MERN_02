import mongoose from "mongoose";

const connectDB = async (db_url, cb) => {
    try {
        const db = await mongoose.connect(db_url);
        console.log(`DB is connected in ${db.connection.host}`);
        cb();
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;