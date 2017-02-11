#! /usr/bin/env node
const path = require('path');
const eventParse = require('./lib/eventParse');
const check = require(path.resolve(process.env.PWD, process.argv[2]));
const event = process.argv[3] ? eventParse(process.argv[3]) : {};
const Table = require('cli-table');
const emoji = require('node-emoji');

const callback = (err, data) => {
  const table = new Table({
    head: [],
  });

  if (err) {
    table.push(
      [path.resolve(process.env.PWD, process.argv[2])],
      [`${emoji.get('fire')} ${err}`]
    );
  } else {
    table.push(
      [path.resolve(process.env.PWD, process.argv[2])],
      [`${emoji.get('white_check_mark')} ${data}`]
    );
  }

  console.log(table.toString());
};

check.handler(event, {}, callback);
