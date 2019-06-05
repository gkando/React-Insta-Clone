import React from 'react';

const CommentInput = props => {

  const addComment = e => {
        e.preventDefault();
       props.submitComment(props.comment)

      }

return(
    <form onSubmit={addComment} className='add-comment'>
    <input        
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.handleComment}
      />
    </form>
)
};

export default CommentInput;




