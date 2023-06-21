import "../styles/stories.scss";
import HorizontalScroll from 'react-scroll-horizontal';
import Story from './Story';
import React from "react";

function Stories(){
    return(
        <div className="stories">
            <HorizontalScroll className="scroll" reverseScroll={true}>
                <Story/>
            </HorizontalScroll>
        </div>
    )
}

export default Stories