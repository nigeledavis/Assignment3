'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./listingSchema.js'),
    config = require('./config'),
    entries = require('./listings.json')

/* Connect to your database */
mongoose.Promise = global.Promise; //updated reference from deprecated Mongoose Promise

mongoose.connect(config.db.uri);

//solves issue with open() call
{useMongoClient: true};

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

var myListing = fs.readFile('listings.json', 'utf-8', function(err, listings) {

  if (err) throw err;

  var parse = JSON.parse(listings);

      //pushes parsed json entries into Listing
      Listing.insertMany(parse.entries, function (err, data) {

        if (err) throw err;
      });

});
