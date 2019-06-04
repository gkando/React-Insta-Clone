import React, { useState } from 'react';
import CommentInput from './CommentInput'
import Comment from './Comment'
import PropTypes from "prop-types";
import './CommentSection.css';


const CommentSection = props => {
    const [commentNew, setCommentNew] = useState('')
    const [commentsData, setCommentsData] = useState(props.post.comments)

     const handleComment = e => {
        e.preventDefault();
        setCommentNew(e.target.value)
      };

      const handleCommentSubmit = e => {
        const newComment = {text: commentNew, username: 'miller06'}
        const comments = commentsData.slice();
        comments.push(newComment)
        setCommentsData(comments);
        localStorage.setItem('myValueInLocalStorage', JSON.stringify(commentsData));
        setCommentNew('')
      };

    return (
        
        <div className='comment-section-container'>
            
            {commentsData.map((comment, index) => 
                <Comment key={index} comment={comment} />
            )}
            
            <CommentInput
                comment={commentNew}
                submitComment={handleCommentSubmit}
                handleComment={handleComment}
            />

            <button className='more-opts-btn'>
                <span className='more-opts'></span>
            </button>


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