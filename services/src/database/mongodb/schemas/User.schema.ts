import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    id: String,
    data: {
        
    },
    auth: {
        username: String,
        hashed_password: String
    }
})

export default mongoose.model("user_dev", userSchema);