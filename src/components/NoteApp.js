// *** Component Dashboard for Note App *** //

// *** MODULES *** //
// ** npm Modules ** //
import React, { useEffect, useReducer } from 'react';

// ** App Modules ** //
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

// *** FUNCTIONAL COMPONENT *** //
const NoteApp = () => {
    /*
    / useReducer takes two arguments, the reducerFunction and the initial state
    / useReducer returns the array with state and a dispatch function
    */
    const [notes, notesDispatch] = useReducer(notesReducer, []);
    
    // * Lifecycle Methods * //

    /*
    / Mimics componentDidMount
    / loads data from localStorage and populates the state when the page loads for the first time
    */
    useEffect(() => {
        const notes =JSON.parse(localStorage.getItem('notes'));
        if(notes) {
            // Use of useReducer to dispatch, instead of useState
            notesDispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, []);

    /*
    / Mimics componentDidUpdate
    / updates local storage when the notes state is changed
    */
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, notesDispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
        </NotesContext.Provider>
    );
};


// *** EXPORT *** //
export { NoteApp as default };