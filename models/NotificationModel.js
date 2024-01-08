/** 
 * NotificationModel will be used to persist all the data for all types of notification including push notifications in all the scenarios like user onboarding, new event math, interested event's last date being near etc.
*/

const { default: mongoose } = require("mongoose");

const notificationSchema = mongoose.Schema({
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
    model: {
        type: ModelEnum,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    deeplink: {
        type: String,
        required: true,
    },
    isSeen: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('Notification', notificationSchema);