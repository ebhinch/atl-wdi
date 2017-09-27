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
//this next line creats a donut model and connects it to database. it creates a data type w/i mongoose called "donut"
const DonutModel = mongoose.model('Donut', DonutSchema);

module.exports = {
    DonutModel: DonutModel
};

// you can also use the below:. if you do it this way, you won't need to say DonutModel.DonutModel. b/c it refers to this variable not an object w/ a variable within it
// module.exports = DonutModel;
