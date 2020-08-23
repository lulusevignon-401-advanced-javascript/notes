'use strict';

const NotesModel = require('./models/notes-schema.js');

const { promises } = require('fs');

class Notes {
  
  constructor() {
    // this.action = opts.command.action;
    // this.payload = opts.command.payload;
  }

  async execute(command) {
    switch (command.action){
    case 'add':
      return this.add(command.payload, command.category);
      
    case 'list':
      return this.list(command.category);
      
    case 'delete':
      return this.delete(command.payload);
      
    default:
      return Promise.resolve();
      
    }
  }

  async add(text, category){

    const newNote = new NotesModel({ category, text });
    
    let saved = await newNote.save();

    return saved;
  }

  async list(category){
    let query = category ? {category} : {};
    let retrieveList = await NotesModel.find(query);
    retrieveList.forEach(note =>{
      console.log(`Note: ${note.text}`);
      // console.log('');
      console.log(`Category: ${note.category}   ID: ${note.id}`);
      console.log('------------------------------------------------------\n');
    });
    return;
  }
  

  async delete(id){
    await NotesModel.findByIdAndDelete(id)
      .then(() => console.log('Delete note', id));
    return;
  }
}

module.exports = Notes;