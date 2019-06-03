import React from 'react';
import PropTypes from "prop-types";
import './Post.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

const Post = props => {
 
    return (
        <div className='post'>
            <CardHeader className='post-header'>
                <img className='thumb-img' src={props.post.thumbnailUrl} />
                <CardTitle className='header-user'>{props.post.username}</CardTitle>
            </CardHeader>
            <div className='post-body-wrapper'>
                <CardImg className='post-img' src={props.post.imageUrl} />
                <span className='post-likes text-left'>{props.post.likes} likes</span>
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