const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        min: 3,
        max: 25,
        unique: true,
    },
    email :{
        type: 'string',
        required: true,
        unique: true,
        max: 50,
    },
    password :{
        type: 'string',
        required: true,
        min: 50,
    },
    isAvatarImageSet : {
        type: 'boolean',
        default: false,
    },
    avatarImage: {
        type: 'string',
        default: '',
    },
});

module.exports = mongoose.model('Users',userSchema);