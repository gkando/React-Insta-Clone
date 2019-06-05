import React, { useState } from 'react';
import PropTypes from "prop-types";
import './Post.css';
import { CardImg, CardTitle, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'



const Post = props => {
    const [likes, setLikes] = useState(props.post.likes);

    const handleLike = e => {
        e.preventDefault();
        setLikes(likes + 1)
    }

    return (
        <div className='post'>
            <CardHeader className='post-header'>
                <img className='thumb-img' alt='thumb-img' src={props.post.thumbnailUrl} />
                <CardTitle className='header-user'>{props.post.username}</CardTitle>
            </CardHeader>
            <div className='post-body-wrapper'>
                <CardImg className='post-img' src={props.post.imageUrl} />

                <div className='post-btn-group'>
                    <a className='btn-like' href='#' onClick={handleLike}><FontAwesomeIcon icon={faHeart} size="2x" /></a>
                    <a className='btn-comment' href='#'><FontAwesomeIcon icon={faComment} flip="horizontal" size="2x" /></a>
                </div>

                <span className='post-likes text-left'>{likes} likes</span>
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