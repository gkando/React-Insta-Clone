import React from 'react';
import './CommentSection.css';
import {UserThumbnail, UserName} from '../Styles/Reusables';

const Comment = props => {
    return (
        <>
            <div key={props.index} className='comment-wrapper'>
                {/* <div className='comment-user' key={props.index}> */}
                    <UserName href={`https://www.instagram.com/${props.comment.username}`}> 
                        {props.comment.username}  
                    </UserName>
                {/* </div> */}
                <span className='comment-text'>
                    {props.comment.text}
                </span>
            </div>
        </>
    )
}

export default Comment