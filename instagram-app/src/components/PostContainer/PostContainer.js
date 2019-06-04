import React from 'react';
import PropTypes from "prop-types";
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import { Card } from 'reactstrap';



const PostContainer = props => {
    return (
        <div className='posts-list'>
            
            {props.dummyData.map((post, index) => {
                return (
                    <Card key={index} className='post-container'>
                        <Post key={index} post={post} />
                        <CommentSection key={index} post={post} />
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