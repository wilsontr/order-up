const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3001, host: 'localhost' });

server.start((err) => {
  if ( err ) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});

function makeCard() {
  return {
    id: 1,
    customerName: 'Name',
    customerAddress: 'address',
    courierName: 'Courier',
    pickupETA: '5:00',
    pickedUp: false
  };
}

server.route({ 
  method: 'GET',
  path: '/api/card',
  handler: (request, reply) => {
    reply(makeCard());
  }
});