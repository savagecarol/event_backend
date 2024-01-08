var admin = require("firebase-admin");

var serviceAccount = require("../firebaseconfig.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
