import "../styles/cards.scss";
import React from "react";
import Card from './Card';
import Stories from './Stories';

function Cards(){
    const commentsOne = [
        {
          user: "raffagrassetti",
          text: "Woah dude, this is awesome! 🔥",
          id: 1,
        },
        {
          user: "therealadamsavage",
          text: "Like!",
          id: 2,
        },
        {
          user: "mapvault",
          text: "Niceeeee!",
          id: 3,
        },
      ];
    
    return(
        <div className="cards">
            <Stories/>
            <Card accountName="raffagrassetti" storyBorder={true} image="https://picsum.photos/800/900" comments={commentsOne} likedByText="datalacak" likedByNumber={78} hours={10}/>
        </div>
    )
}

export default Cards