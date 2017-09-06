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

var database = mongoose.connect('mongodb://nigeldavis:Hotsauce22@ds127994.mlab.com:27994/assignment3');
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

 Object.keys(entries).forEach(function(entry) {

   Object.keys(entries[entry]).forEach(function(type) {

     //mongoose model for different entries
     var myListing = Listing({

       code: entries[entry][type].code,

       name: entries[entry][type].name,

       coordinates: entries[entry][type].coordinates,

       address: entries[entry][type].address

     });

     myListing.save(function(err) {

       if (err) throw err;

     });

   });

 });
