import React from 'react';
import PropTypes from "prop-types";
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


const PostContainer = props => {
    return (
        <div className='posts-list'>
            
            {props.dummyData.map(post => {
                return (
                    <Card className='post-container'>
                        <Post key={post.id} post={post} />
                        <CommentSection key={post.id} post={post} />
                    </Card>
                    );
            })}
        </div>
    )
}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(PropTypes.object).isRequired
  };

export default PostContainer