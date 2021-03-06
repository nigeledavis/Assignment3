/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({

    code: { type: String, required: true },

    name: { type: String, required: true },

    coordinates: {

      latitude: Number,

      longitude: Number,

      required: false

    },

    address: {type: String, required: false, unique: false},

    created_at: Date,

    updated_at: Date

  });

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {

//sets currentName equal to a string object
  var currentName = new String();

  this.updated_at = currentName;

  if(!currentName.created_at) {

    this.created_at = currentName;

}

next();

});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
