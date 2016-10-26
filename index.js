#! /usr/bin/env node
const path = require('path');
const check = require(path.resolve(process.env.PWD, process.argv[2]));

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

check.handler('', '', callback);
