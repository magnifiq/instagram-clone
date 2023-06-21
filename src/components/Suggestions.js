import '../styles/suggestions.scss';
import Profile from './Profile';
import React from 'react';
function Suggestions(){
    return(
        <div className="suggestions">
            <div className='titleContainer'>
                <div className='title'>Suggestions For You</div>
                <a href='/'>See All</a>
            </div>

            <Profile caption="Followed by ...." urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        </div>
    )
}

export default Suggestions;