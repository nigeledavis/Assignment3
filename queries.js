/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {

//finding Library West by name

Listing.find({name: 'Library West' }, function(err, listing) {
  if (err) throw err;

  console.log(listing);

});

};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */

   Listing.findOneAndRemove({ code: 'CABL' }, function(err){

     if (err) throw err;

     console.log('All buildings with the code CABL have been deleted');

   });

};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */

   Listing.findOneAndUpdate({ address: '701 N Broadway, Sleepy Hollow, NY 10591, United States'}, {address: '1953 Museum RD Gainesville, FL 32611'}, function(err, listing) {

     if (err) throw err;

     console.log('The address of ' + listing + ' has been updated.');

   });

};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, listings) {

     if (err) throw err;

     console.log('All listings have been retrieved. They are as follows: ' + listings);

   });

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
