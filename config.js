//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: "mongodb://nigeldavis:Hotsauce22!@ds127994.mlab.com:27994/assignment3dbase", //place the URI of your mongo database here.
  }
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
