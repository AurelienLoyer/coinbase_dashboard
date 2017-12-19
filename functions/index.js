// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Coinbase
const coinbase = require('coinbase');
const client   = new coinbase.Client({'apiKey': functions.config().coinbase.api, 'apiSecret': functions.config().coinbase.api_secret});

exports.getData = functions.https.onRequest((req, res) => {
    
    client.getBuyPrice({'currencyPair': 'BTC-EUR'}, function(err, obj) {
        res.send('total amount: ' + obj.data.amount);
    });
    
    // res.send('Get Data on Coinbase OK !');
});
