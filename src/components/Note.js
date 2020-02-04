// *** Component for individual Note *** //

// *** MODULES *** //
// ** npm Modules ** //
import React, { useContext } from 'react';

// ** App Modules ** //
import NotesContext from '../context/notes-context';

// *** FUNCTIONAL COMPONENT *** //
const Note = ({ note }) => {
    // Context
    const { notesDispatch } = useContext(NotesContext);

    // Rendering
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => notesDispatch({ type: 'REMOVE_NOTE', title: note.title })}>x</button>
        </div>
    );
};

// *** EXPORTS *** //
export { Note as default };