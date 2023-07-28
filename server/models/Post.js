const { Schema, Model } = require('mongoose');

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    photos: [
        {
            type: String,   
        }
    ],
    itinerary: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    description: String,
    savedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Post = model('Post', postSchema);

module.exports = Post;

