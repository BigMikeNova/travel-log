const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        max: 50,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    picturePath: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ''
    },
    following: {
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
    },

    { timestamps: true}
    
);

const User = model('User', userSchema);

module.exports = User;