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
      list: 'list',
      l: 'list',
      delete: 'delete',
      d: 'delete',
    };

    let arg = Object.keys(args).filter(arg => validAction[arg])[0];

    const category = args.c || args.category;

    let payload = typeof args[arg] === 'string' ? args[arg]: undefined;

    return {
      action:validAction[arg],
      payload,
      category,
    };
  }

  valid (){
    if (!this.command.action) {return false;}
    if (this.command.action === 'add') {
      if (!this.command.payload) {
        return false;
      }
    }
    if (this.command.action === 'delete'){
      if (!this.command.payload){
        return false;
      }
    }
    return true;
  }
}


module.exports = Input;