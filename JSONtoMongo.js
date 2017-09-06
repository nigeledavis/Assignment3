'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */

var database = mongoose.connect('mongodb://nigeldavis:Hotsauce22@ds127994.mlab.com:27994/assignment3');
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

 Object.keys(listings).forEach(function(listing) {

   Object.keys(listings[listing]).forEach(function(type) {

     //mongoose model for different listings
     var myListing = Listing({

       code: listings[listing][type].code,

       name: listings[listing][type].name,

       coordinates: listings[listing][type].coordinates,

       address: listings[listing][type].address

     });

     myListing.save(function(err) {

       if (err) throw err;

     });

   });

 });
