import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from "./components/content/Content";
import Posts from "./components/Posts/Posts";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, BrowserRouter, Switch} from "react-router-dom";


function App (props) {
  const s = props.state;
  // debugger;
  // console.log(props.dispatch);

  return (
    <div className="App">
    <BrowserRouter>
        <Header />
        <Content />    
        <div className="content">
            <div className="container">
                <Switch>
                    <Route path ="/dialogs" exact render = {() => <Dialogs DialogData = {s.chatData.dialogData} messagesData = {s.chatData.messagesData} dispatch = {props.dispatch} />}/>
                    <Route path = "/posts" exact  render = {() => <Posts dispatch = {props.dispatch} postsData={s.postsData} newPostTitle={s.textFromState} />}/>
                    {/* <Route path ="/dialogs" exact component = {Dialogs}/>
                    <Route path = "/posts" exact  component = {Posts}/> */}
                </Switch>
                <h1>Stories</h1>     
                <h1>Posts</h1>
                <h1>News</h1>
            </div>
        </div>
        </BrowserRouter>   
    </div>
  );
}

export default App;

{/* <Route path ="/dialogs" exact render = {() => <Dialogs DialogData = {s.chatData.dialogData} messagesData = {s.chatData.messagesData} addTextInChat = {props.addTextInChat} />}/>

<Route path = "/posts" exact  render = {() => <Posts  addPost = {props.addPost} newPostTitle={s.textFromState} updateNewPostText={props.updateNewPostText} />}/> */}