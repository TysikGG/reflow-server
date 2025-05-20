import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    id: String,
    data: {
        username: String,
    },
    auth: {
        _hashed_password: String
    }
})

export default mongoose.model("user_dev", userSchema);