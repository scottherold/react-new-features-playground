// *** Stores Notes Reducer *** //

// *** REDUCER *** //
// Mimics a Redux reducer
const notesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                { title: action.title, body: action.body }
            ]
        case 'POPULATE_NOTES':
            return action.notes
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title);
        default:
            return state;
    };
};

// *** EXPORT *** //
export { notesReducer as default };