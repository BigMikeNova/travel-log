import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 30,
        },
        lastName: {
            type: String,
            required: true,
            min: 1,
            max: 30,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    }, { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;