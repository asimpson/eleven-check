#! /usr/bin/env node
const path = require('path');
const eventParse = require('./lib/eventParse');
const check = require(path.resolve(process.env.PWD, process.argv[2]));
const event = process.argv[3] ? eventParse(process.argv[3]) : {};

const callback = (err, data) => {
  if (err) {
    console.log('++++');
    console.log('err', err);
    console.log('++++');
  } else {
    console.log('====');
    console.log('data', data);
    console.log('====');
  }
};

check.handler(event, {}, callback);
