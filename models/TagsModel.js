/**
 * TagsModel will be used to persist all the sub-tags or child tags under the parent tags and will be used while posting and searching for the events for similar interests
 */

const { default: mongoose } = require("mongoose");

const tagsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid.v4()
    },
    tagName: {
        type: String,
        required: true
    },
    parentTag: {
        type: String,
        requried: true,
        default: () => uuid.v4()
    },
    tagImage: {
        type: String,
        required: false,
    },
    eventList: {
        type: [{string, string}],
        required: false
    }
})

module.exports = mongoose.model('Tags', tagsSchema);