const Hapi = require('hapi');
const server = new Hapi.Server();
const fs = require('fs');
const _ = require('lodash');

const apiHelpers = require('./api-helpers.js');

const NAME_FILE = '../data/names.txt';
const ETA_WINDOW = 30;

var cardId = 1;
var allNames = [];

server.connection({ port: 3001, host: 'localhost' });

server.start((err) => {
  if ( err ) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);

  readNames(NAME_FILE).then((names) => {
    allNames = names.split('\n');
  });
});

function readNames(nameFile) {
  return new Promise((resolve, reject) => {
    try { 
      let filename = require.resolve(nameFile);
      fs.readFile(filename, 'utf8', (err, data) => {
        if ( !err ) {
          resolve(data); 
        } else {
          reject(err);
        }
      });
    } catch (err) {
      console.error('Error loading names file.');
      reject(err);
    }
  });
}

server.route({ 
  method: 'GET',
  path: '/api/card',
  handler: (request, reply) => {
    reply(apiHelpers.makeCard(cardId++, allNames, ETA_WINDOW));
  }
});

server.route({ 
  method: 'GET',
  path: '/api/cards',
  handler: (request, reply) => {
    let cards = [];
    for ( let i = 0; i < 15; i++ ) {
      cards.push(apiHelpers.makeCard(cardId++, allNames, ETA_WINDOW));
    }
    reply(cards);
  }
});