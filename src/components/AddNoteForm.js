// *** Form component to Add New Note *** //

// *** MODULES *** //
// ** npm Modules ** //
import React, { useState, useContext } from 'react';

// ** App Modules ** //
import NotesContext from '../context/notes-context';

// *** FUNCTIONAL COMPONENT *** //
const AddNoteForm = () => {
    // Context
    const { notesDispatch } = useContext(NotesContext);
    
    // State
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // Dispatches new note to the reducer
    const addNote = (e) => {
        e.preventDefault();
        notesDispatch({ 
            type: 'ADD_NOTE',
            title,
            body
        });
        setTitle('');
        setBody('')
    };

    // Rendering
    return (
        <div>
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>add note</button>
            </form>
        </div>
    )
};

// *** EXPORT *** //
export { AddNoteForm as default };