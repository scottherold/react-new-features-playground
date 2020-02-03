import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = (props) => {
    /*
    / with useState(), you can provide any argument (string, number, or object)
    / This is unlike class components, and state, which requires an object
    / This returns an array of two items: the state, and the function to manipulate the state
    / the most common way of accessing array data is by destructing the array (see below syntax)
    */
    const [count, setCount] = useState(props.count);

    return (
        <div>
            <p>The current count is {count}</p>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count = 0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

// This is how to setup default props
App.defaultProps = {
    count: 0
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();