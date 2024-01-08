/**
 * AuthModel will be used to persist the authentication details of every user in the database
 */

const mongoose = require('mongoose');
const uuid = require('uuid');
const LoggedInInfoDto = require('../dto/LoggedInInfo');

const authSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    userId: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    mobileNumber: {
        type: Number,
        required: true,
        length: 10
    },
    emailId: {
        type: String,
        required: false,
    },
    loggedInStatus: {
        type: Boolean,
        required: true,
    },
    deviceLoginInfo: {
        type: [LoggedInInfoDto],
        required: false,
    },
    createdAt: {
        type: Date,
        required: false, 
    },
    updatedAt: {
        type: Date,
        required: false, 
    }
})

module.exports = mongoose.model('Auth', authSchema);