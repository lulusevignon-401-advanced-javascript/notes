'use strict';

const NotesModel = require('./notes-schema.js');

const { promises } = require('fs');

class Notes {
  
  constructor() {
    // this.action = opts.command.action;
    // this.payload = opts.command.payload;
  }

  async execute(command) {
    switch (command.action){
    case 'add':
      this.add(command.payload, command.category);
      break;
    case 'list':
      this.list(command.category);
      break;
    case 'delete':
      this.delete(command.payload);
      break;
    default:
      promises.resolve();
      break;
    }
  }

  async add(text, category){

    const newNote = new NotesModel({ category, text });
    
    let saved = await newNote.save();

    return saved;
  }

  async list(category){

    const retrieveList = await NotesModel.find({category});
    console.log(retrieveList);
    return retrieveList;
  }
  

  async delete(id){
    await NotesModel.findByIdAndDelete(id);
    return;
  }
}

module.exports = Notes;