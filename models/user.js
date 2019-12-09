const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: 'string',
        required: true
    },
    
    encryptedPassword: {
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);