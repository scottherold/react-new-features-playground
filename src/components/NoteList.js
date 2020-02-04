// *** Component for the list of notes *** //

// *** MODULES *** //
// ** npm Modules ** //
import React, { useContext } from 'react';

// ** App Modules ** //
import Note from './Note';
import NotesContext from '../context/notes-context';

// *** FUNCTIONAL COMPONENT *** //
const NoteList = () => {
    // context -- destructured
    const { notes } = useContext(NotesContext);

    // rendering
    return notes.map((note) => (
        <Note key={note.title} note={note} />
    ));
};

// *** EXPORT *** //
export { NoteList as default };