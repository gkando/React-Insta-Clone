import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className='comment-section-container'>
            {props.post.comments.map(comment => (
                <div className='comment-wrapper'>
                    <div className='comment-user' key={comment.id}><a href={`https://www.instagram.com/${comment.username}`}>{comment.username}</a></div>
                    <span className='comment-text'>{comment.text}</span>
                </div>
            ))}
            <div className='add-comment'>
                <input placeholder='Add a comment...'></input>
                <button className='more-opts-btn'><span className='more-opts'></span></button>
            </div>
        </div>

    )
}


CommentSection.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
  };

export default CommentSection