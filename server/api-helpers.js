const _ = require('lodash');
const moment = require('moment');
const Inflector = require('inflected');

function getRandomName(names) {
  let nameIndex = Math.round(Math.random() * names.length);
  return _.trim(names[nameIndex]);
}

function getRandomAddress() {
  let street = Math.round(Math.random() * 220) + 1;
  let houseNum = Math.round(Math.random() * 250);
  let cardinal = Math.round(Math.random() * 1) ? 'W' : 'E';
  let ordinal = Inflector.ordinalize(street);
  return `${houseNum} ${cardinal} ${ordinal} St`;
}

function getRandomETA(etaWindow) {
  let date = new Date();
  let randomMinutes = Math.random() * etaWindow;
  let momentDate = moment(date).add(randomMinutes, 'minutes').format('LLL');
  return momentDate;
}

function makeOrder(id, names, etaWindow) {
  return {
    id: id,
    customerName: getRandomName(names),
    customerAddress: getRandomAddress(),
    courierName: getRandomName(names),
    pickupETA: getRandomETA(etaWindow),
    pickedUp: false
  };
}

module.exports = {
  makeOrder
};