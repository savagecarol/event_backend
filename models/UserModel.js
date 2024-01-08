/**
 * UserModel will be used to save all the data of an onboarded user on our App
 */

const { default: mongoose } = require("mongoose");
const UserTypeEnum = require("../dto/enums/UserTypeEnum");
const LocationDto = require("../dto/LocationDto");

const userSchema = mongoose.Schema({
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
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    profileImage: {
        type: String,
        required: false,
    },
    type: {
        type: UserTypeEnum,
        required: true,
        default: UserTypeEnum.BASIC
    },
    location: {
        type: LocationDto,
        reuired: true,
    },
    interestedEventsList: {
        type: [String],
        required: true,
    },
    notificationsList: {
        type: [String],
        required: true,
    },
    tagsList: {
        type: [String],
        required: true,
    }
})