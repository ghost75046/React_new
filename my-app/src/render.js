import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {addPost} from './redux/state'

//addPost('heeeeeey')

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App  state = {state} addPost={addPost} />
//   </React.StrictMode>
// );

export let renderEntireTree  = (state) => {

    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <App  state = {state} addPost={addPost} />
    </React.StrictMode>
);
}
