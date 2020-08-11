'use strict';

const minimist = require('minimist');

function Input(){
  const args = minimist(process.argv.slice(2));
  // console.log(args);
  this.command = this.parse(args);
}

Input.prototype.parse =  function (args){
  let validAction = {
    a: 'add',
    add: 'add',
  };

  let arg = Object.keys(args).filter(arg => validAction[arg])[0];

  return {
    action:validAction[arg],
    payload: args[arg],
  };
};

Input.prototype.valid = function (){
  return !!(this.command.action && this.command.payload);
};


module.exports = Input;