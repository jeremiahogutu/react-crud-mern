const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title: {
        type: String
    },
    summary: {
        type: String
    },
    description: {
        type: String
    }
}, {
    collection: 'post'
});

module.exports = mongoose.model('Post', Post);