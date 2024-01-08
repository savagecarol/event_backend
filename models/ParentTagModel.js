/**
 * ParentTags will be used to persist all the existing Parent tags inclduing sports, music etc.
 */

const { default: mongoose } = require("mongoose");

const parentTagsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    parentTagName: {
        type: String,
        required: true,
    },
    parentTagImage: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('ParentTags', parentTagsSchema);