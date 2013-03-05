///////////////////////////////////////////////////////////////////////////////
//
// Half Past Five Server
// Author: Nicolas FRADIN
// Date: 04/03/2013
//
///////////////////////////////////////////////////////////////////////////////

var MONGOHQ_URL = "mongodb://readonly:123456789@dharma.mongohq.com:10033/HalfPastFive";

var mongodb = require('mongodb');
var url = require('url');
var log = console.log;
var restify = require('restify');

//
var server = restify.createServer({
  name: 'HalfPastFive',
	version: '0.0.1a'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


mongodb.Db.connect(MONGOHQ_URL, function(error, db) { 
  if (error) throw error; 

  var groupCollection = new mongodb.Collection(db, "GroupCollection");
  var itemCollection = new mongodb.Collection(db, "ItemCollection");

  server.get('/groups', function(req, res, next) {
    var groups = groupCollection.find();
    groups.toArray(function(error, grpArray) {
      if(error) throw error;

      //res.header('Access-Control-Allow-Origin', "http://nfradin.fr");
      res.header('Access-Control-Allow-Origin', "http://localhost");
      res.send(grpArray);
    });
  });


  server.get('/groups/search/:name', function(req, res, next) {
    var groups = groupCollection.find({name: new RegExp(req.params.name, "i")});

    groups.toArray(function(error, grpArray) {
        if(error) throw error;

        //res.header('Access-Control-Allow-Origin', "http://nfradin.fr");
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.send(grpArray);
    });
  });


  server.get('/groups/:id/items', function(req, res, next) {
    var items = itemCollection.find({groupId: req.params.id});

    items.toArray(function(error, itemsArray) {
        if(error) throw error;

        //res.header('Access-Control-Allow-Origin', "http://nfradin.fr");
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.send(itemsArray);
    });
  });

  server.get('/groups/:id', function(req, res, next) {
    var oid = groupCollection.db.bson_serializer.ObjectID.createFromHexString(req.params.id)
    groupCollection.findOne({_id: oid}, function(error, result) {
      //res.header('Access-Control-Allow-Origin', "http://nfradin.fr");
      res.header('Access-Control-Allow-Origin', "http://localhost");
      res.send(result);
    });
  });

});


server.listen(8181, function() {
  console.log('%s listening at %s', server.name, server.url);
});