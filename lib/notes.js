'use strict';

const NotesModel = require('./models/notes-schema.js');

const NotesCollection = require('./models/notes-collection.js');

class Notes {
  
  constructor() {
    this.collection = new NotesCollection();
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

    const saved = await this.collection.create({text, category});
    
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