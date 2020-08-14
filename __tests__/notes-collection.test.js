'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../lib/models/notes-collectionjs');

describe('Notes Collection', () => {
  
  it('Should create - sunny day', async () =>{

    const notesCollection = new NotesCollection();
  
    const noteData = { text: 'Celebrate Victory', category: 'Reasons to celebrate'};
  
    const note = await notesCollection.create(noteData);

    expect(note._id).toBeDefined();
  });
});