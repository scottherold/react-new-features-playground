import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        setNotes([
            ...notes,
            { title, body }
        ]);
        setTitle('');
        setBody('')
    };

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title)); // <--keeps note if title does not match
    };
    
    // * Lifecycle Methods * //

    /*
    / Mimics componentDidMount
    / loads data from localStorage and populates the state when the page loads for the first time
    */
    useEffect(() => {
        const notesData = setNotes(JSON.parse(localStorage.getItem('notes')));
        if(notesData) {
            setNotes(notesData);
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
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <Note key={note.title} note={note} removeNote={removeNote} />
            ))}
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>add note</button>
            </form>
        </div>
    );
};

const Note = ({ note, removeNote }) => {
    useEffect(() => {
        console.log('Setting up effect');

        // This acts as componentDidUnmount
        return () => {
            console.log('Cleaning up effect');
        }
    }, []);

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
        </div>
    );
};

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();