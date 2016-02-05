//get the Nerd module

var nerd = require('./models/nerd');

module.exports = function(app) {
	//server routes
	//auth routes
	//handle things like api calls

	//sample api route
	app.get('/api/nerds', function(req, res) {
		//use mongoose to get all the nerds from the database
		//as simple as like 'SELECT * from nerd'
		nerd.find(function(err, nerds) {
			//if any error occurs, send the error in response(res)
			if (err) {
				res.send(err);
				//nothing will happen after then, the function terminates
			}

			//if no error, return all the nerds in JSON format.
			res.json(nerds);
		});
	});

	// route to handle creating goes here (app.post)


    // route to handle delete goes here (app.delete)	


    //************************
    //frontend routes
    //route to handle all the angular requests
    app.get('*', function(req, res){
    	res.sendfile('./public/views/index.html'); //load index.html
    });

};