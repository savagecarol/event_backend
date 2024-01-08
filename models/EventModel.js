/**
 * EventModel will be used to persist the data for all the events that will be added in the app
 */

const mongoose = require('mongoose');
const uuid = require('uuid');
const LocationDto = require('../dto/LocationDto');

const eventSchema = new mongoose.Schema({
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
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: LocationDto,
        required: true
    },
    eventExpiryTime: {
        type: Date,
        required: true,
        default: Date.UTC.now,
    },
    tagList: {
        type: [String],
        required: true,
    },
    imageList: {
        type: [String],
        required: true,
    },
    postRenderEnum: {
        type: postRenderEnum,
        required: false,
    },
    linksList: {
        type: [string],
        required: true,
    },
    interestedUsersList: {
        type: [string],
        required: true,
    }
})

module.exports = mongoose.model('Event', eventSchema);