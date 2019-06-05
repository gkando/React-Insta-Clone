import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return (
        <>
            <div key={props.index} className='comment-wrapper'>
                <div className='comment-user' key={props.index}>
                    <a href={`https://www.instagram.com/${props.comment.username}`}> 
                        {props.comment.username}  
                    </a>
                </div>
                <span className='comment-text'>
                    {props.comment.text}
                </span>
            </div>
        </>
    )
}

export default Comment