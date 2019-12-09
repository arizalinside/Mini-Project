const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    title: {
        type: 'string',
        required: true
    },
    
    body: {
        type: 'string',
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post', postSchema);