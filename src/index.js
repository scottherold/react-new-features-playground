import React, { useState } from 'react';
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
    
    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <div key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button onClick={() => removeNote(note.title)}>x</button>
                </div>
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

// const App = (props) => {
//     /*
//     / with useState(), you can provide any argument (string, number, or object)
//     / This is unlike class components, and state, which requires an object
//     / This returns an array of two items: the state, and the function to manipulate the state
//     / the most common way of accessing array data is by destructing the array (see below syntax)
//     */
//     const [count, setCount] = useState(props.count);
//     const [text, setText] = useState('');

//     return (
//         <div>
//             <p>The current {text || 'count'} is {count}</p>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <button onClick={() => setCount(count = 0)}>Reset</button>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <input value={text} onChange={(e) => setText(e.target.value)} />
//         </div>
//     )
// }

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();