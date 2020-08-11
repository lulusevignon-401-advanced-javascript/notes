'use strict';

const minimist = require('minimist');

function Input(){
  const args = minimist(process.argv.slice(2));


}

Input.prototype.getMethod =  function (method = ''){
  let validMethod = /-a|--add/i;
  return validMethod.test(method) ? method : 'GET';
};