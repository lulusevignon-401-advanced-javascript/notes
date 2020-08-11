#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
// const { help } = require('yargs');

const options = new Input();
const notes = new Notes(options);

options.valid() ? notes.execute() : help();

function help() {
  console.log('Error');
  process.exit();
}

