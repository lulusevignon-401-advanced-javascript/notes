const NotesModel = require('./notes-schema.js');
const { schema } = require('./notes-schema.js');

class NotesCollection {

  create(info){

    let note = new NotesModel(info);
    return note.save();
  }

  delete(id){
    NotesModel.deleteOne(id);
  }

  get(){
    return NotesModel.find({ });
  
  }


}


module.exports = NotesCollection;