/**
 * BaseTable will be used to persist the history of every action for every model including AUTH, USER_ONBOARDING, NOTIFICATION, NEW_EVENT etc.
 */

const mongoose = require('mongoose');
const uuid = require('uuid');
const ModelEnum = require('../dto/enums/ModelEnum');

const baseTableSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.UTC.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.UTC.now,
    },
    createdBy: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String,
        required: true
    },
    history: {
        type: any,
        required: true
    },
    model: {
        type: ModelEnum,
        required: true,
    },
})

module.exports = mongoose.model('BaseTable', baseTableSchema);