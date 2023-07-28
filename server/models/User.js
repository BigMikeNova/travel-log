const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: 'Create your unique username!',
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: 'Please provide a valid e-mail address!',
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        required: 'Password is required!',
        minlength: 8
    },
    profilePicture: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const User = model('User', userSchema);

module.exports = User;