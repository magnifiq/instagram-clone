import "../styles/card.scss";
import React from "react";
import Profile from './Profile';
import {ReactComponent as CardButton} from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card(props){

    
    const{
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours
    }=props;

    return(
        <div className="card">
            <header>
                <Profile iconSize="medium" storyBorder={storyBorder}/>
                <CardButton className="cardButton"/> 
            </header>
            <img className="cardImage" src={image} alt="content"/>
            <CardMenu/>
            <div className="likedBy">
                <Profile iconSize="small" hiddenAccountName={true}/>
                <span>Liked by <strong>{likedByText}</strong> and <strong>{likedByNumber}</strong></span>
            </div>
            <div className="comments">
                {comments.map(comment=>{
                    return(
                        <Comment key={comments.id}
                        accountName={comments.user}
                        comment={comment.text}/>
                    )
                })}
            </div>
            <div className="timePosted">{hours} hours ago</div>
            <div className="addComment">
                <div className="commentText">Add a comment...</div>
                <div className="postText">POST</div>
            </div>
        </div>
    )
}

export default Card;