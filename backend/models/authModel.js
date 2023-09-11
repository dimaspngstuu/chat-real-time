const {model,Schema} = require('mongoose');

const registerSchmea = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select:  false
    },
    Image: {
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = model('user',registerSchmea)