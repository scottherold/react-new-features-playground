// *** Context acts React's way of storing state among components (like Redux's store) *** //

// *** MODULES *** //
// npm Modules ** //
import React from 'react';

// *** CONTEXT *** //

/*
/ You create the context with this simple line
/ An argument is nto necessary, but will provide the default context
/ You simply need to export the context from here; the other files will manipulate it
*/
const NotesContext = React.createContext();

// *** EXPORTS *** //
export { NotesContext as default };