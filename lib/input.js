'use strict';

const minimist = require('minimist');

class Input{

  constructor(){
    const args = minimist(process.argv.slice(2));
    // console.log(args);
    this.command = this.parse(args); 
  }
  
  parse(args) {
    let validAction = {
      a: 'add',
      add: 'add',
    };

    let arg = Object.keys(args).filter(arg => validAction[arg])[0];

    return {
      action:validAction[arg],
      payload: args[arg],
    };
  }

  valid (){
    return !!(this.command.action && this.command.payload);
  }
}


module.exports = Input;