const Hapi = require('hapi');
const server = new Hapi.Server();
const fs = require('fs');
const _ = require('lodash');

const apiHelpers = require('./api-helpers.js');

const NAME_FILE = '../data/names.txt';
const ETA_WINDOW = 50;
const ORDERS_BATCH = 5;

var allNames = [];

server.connection({ 
  port: 3001, 
  host: 'localhost',
  routes: {
    cors: true
  }
});

server.start((err) => {
  if ( err ) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);

  readNames(NAME_FILE).then((names) => {
    allNames = names.split('\n');
  });
});

server.route({ 
  method: 'GET',
  path: '/api/orders',
  handler: (request, reply) => {
    let orders = [];
    for ( let i = 0; i < ORDERS_BATCH; i++ ) {
      orders.push(apiHelpers.makeOrder(getOrderId(), allNames, ETA_WINDOW));
    }
    reply(orders);
  }
});

server.route({ 
  method: 'GET',
  path: '/api/single-order',
  handler: (request, reply) => {
    let newOrder = apiHelpers.makeOrder(getOrderId(), allNames, ETA_WINDOW);
    reply(newOrder);
  }
});

var getOrderId = (function () {
    var i = 1;

    return function () {
        return i++;
    }
})();

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