import { useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from "./CommentsList";
import LoadingSpinner from '../UI/LoadingSpinner';
import { useParams } from 'react-router-dom';

const Comments = (props) => {
  const params = useParams();
  const quoteId = params.quoteID;
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComments} = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  },[sendRequest,quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;

  if(status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }
  
  if(status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = (
      <CommentsList comments={loadedComments}/>
    )
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = (
      <p className = 'centered'>No Comments were added yet</p>
    )
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addCommentHandler}/>}
      {comments}
    </section>
  );
};

export default Comments;
