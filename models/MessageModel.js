/**
* MessageModel wil be used to persist all the data for all the messages initiated in all the usecases
*/ 

const { default: mongoose } = require("mongoose");

const messageShema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    senderId: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    receiverId: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    eventId: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    time: {
        type: Date,
        required: true,
        default: Date.UTC.now,
    },
    message: {
        type: String,
        required: true,
    },
    isSeen: {
        type: Boolean,
        required: true,
    },
    isLeft: {
        type: Boolean,
        required: true,
    },
    seenTime: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('Message', messageShema);