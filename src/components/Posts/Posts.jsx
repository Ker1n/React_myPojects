import React from "react";
import Post from "./Post/Post";
import {updateNewPostActionCreator, addPostActionCreator} from '../redux/state';


const Posts = (props) => { 

    // console.log(props);

    const postsPrint = props.postsData.map ((post) => { 
        return <Post authorName = {post.authorName} date = {post.date} authorId = {post.authorId} title = {post.title} />
    });

    const newPostElement = React.createRef();

    const addNewPost = () => {
        props.dispatch(addPostActionCreator())
        //props.addPost();
    }; 
     
    const onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch(updateNewPostActionCreator(text));
    }
    
    
    return (
        <div className="posts__wrapper">  
        <div className="Posts___add">
            <button onClick = {addNewPost}> Add Post </button>
            <textarea name="post" id="12" cols="30" rows="10" ref={newPostElement} onChange = {onPostChange}  value={props.newPostTitle[0].newPostTitle}></textarea>
        </div>
             {/* <Post id="3" authorName="Markov Kirill" date = "21 may" authorId ="@Ker1n_mkc" title = "I like Star War films so much, need to revise them again" /> */}
            {postsPrint}
        </div>
    )
};


export default Posts;