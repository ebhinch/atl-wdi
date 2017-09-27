//requirements: require mongoose
const mongoose = require('mongoose');

//create your donut schema:
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const DonutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

//export your donut with module.exports()
const DonutModel = mongoose.model('Donut', DonutSchema);

module.exports = {
    DonutModel: DonutModel
};

