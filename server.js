// Dependencies

// const fs = require('fs');
var express = require('express');

// Tells node that we are creating an "express" server
var app = express();

// setting initial port
var PORT = process.env.PORT || 8008;

// Sets up the Express app to handle data parsing (hot restaurant class activity)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('./public'));

// call routes
require('./Develop/routes/apiRoutes')(app);
// require('./Develop/routes/htmlRoutes')(app);

// listner - "starts" server
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
