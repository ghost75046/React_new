import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts =[
    {id:1, message: 'Hey', likesCount:13},
    {id:2, message: 'Bro', likesCount:15},


]

let dialogsData = [
    {id: 1, name: 'Delya'},
    {id: 2, name: 'Myska'},
    {id: 3, name: 'Kucha'}
]

let messages = [
    {id: 1, message: 'Meow'},
    {id: 2, message: 'Shhhh'},
    {id: 3, message: 'Bark'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
