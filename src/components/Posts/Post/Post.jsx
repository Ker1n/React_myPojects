import React from 'react';
import PostImage from "./img/960x0.jpg";
import Avatar from "./img/220px-Anakin-Jedi.jpg";
import Check from "./img/verified.c9a1728d.svg";
import Comment from "./icons/comments.b89805e1.svg";
import Like from "./icons/like.7746f5e4.svg";
import Share from "./icons/share.bd40ebf4.svg";
import Send from "./icons/send.8b6117db.svg";
import './Post.scss';


const Post = (props) => { 
    return ( 
        <div className="post">
            <div className="container">
                <div className="post__row">
                    <div className="post__avatar">
                        <img src={Avatar} alt="avatar"/>
                    </div>
                    <div className="post__body">
                        <div className="post__author">
                            <div className="author__row">
                                <div className="author__name">{props.authorName}</div>
                                <div className="author__check">
                                    <img src={Check} alt="check"/>
                                </div>
                                <div className="author__datePost">
                                 <span>{props.authorId}</span><span>{props.date}</span>
                                </div>
                            </div>
                            <div className="author__title">{props.title}
                            </div>
                            <div className="author__image">
                                <img src={PostImage} alt="post img"/>
                            </div>
                            <div className="author__links">
                                <div className="links__row">
                                    <a href="#"><img src={Comment} alt="Comment"/></a>
                                    <a href="#"><img src={Share} alt="Share"/></a>
                                    <a href="#"><img src={Like} alt="Like"/></a>
                                    <a href="#"><img src={Send} alt="Send"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Post

