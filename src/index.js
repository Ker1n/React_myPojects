import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import * as serviceWorker from './serviceWorker';
import store from "./components/redux/state";
// import {addPost, updateNewPostText, addTextInChat, subscribe} from './components/redux/state';
// addPost("privet")

let renderEntireTree = () => { 
    ReactDOM.render(
      <React.StrictMode>
        <App state={store.getState}  dispatch = {store.dispatch.bind(store)}  />
      </React.StrictMode>,
      document.getElementById('root')
    );  
}
  
renderEntireTree();

store.subscribe(renderEntireTree);


serviceWorker.unregister();

// addPost = {store.addPost.bind(store)} addTextInChat = {store.addTextInChat.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} /