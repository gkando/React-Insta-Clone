import React from 'react';
import PropTypes from "prop-types";
import './Post.css';


const Post = props => {
 
    return (
        <div className='post'>
            <div className='post-header'>
                <img className='thumb-img' src={props.post.thumbnailUrl} />
                <div className='header-user'>{props.post.username}</div>
            </div>
            <div className='post-body-wrapper'>
                <img className='post-img' src={props.post.imageUrl} />
                <span className='post-likes'>{props.post.likes} likes</span>
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
  };

export default Post