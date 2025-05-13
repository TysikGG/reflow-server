import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    id: String,
    data: {
        reg_data: {
            email: String,
            username: String,
            reg_time: String
        }
    }
})

export default mongoose.model("user_dev", UserSchema);