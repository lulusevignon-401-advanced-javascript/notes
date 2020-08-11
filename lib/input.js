'use strict';

const minimist = require('minimist');

function Input(){
  const args = minimist(process.argv.slice(2));
  // console.log(args);
  this.action = this.getAction(args.a);
  this.payload = this.getPayload(args.u);
}

Input.prototype.getAction =  function (action = ''){
  let validAction = /-a|--add/i;
  return validAction.test(action) ? action : 'Error';
};

Input.prototype.getPayload = function (payload = ''){
  return payload ? payload : 'Error';
};

module.exports = Input;