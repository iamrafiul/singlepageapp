//get the mongoose module

var mongoose = require('mongoose');

//define the model
//module.exports allows to pass this to other files
//If you are familiar with java, just think is as the public method type
module.exports.Nerd = mongoose.model('Nerd', {
	name : { type: String, default: ''}
});

//It simply means that we have a model named 'Nerd' which has a field called 'name'
//which is of string type and by default it's null