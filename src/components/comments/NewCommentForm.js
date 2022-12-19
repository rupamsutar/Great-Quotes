import { useEffect, useRef, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';


import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  
  const [enteredText, setEnteredText] = useState("");
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();
  const { onAddedComment } = props;

  // console.log(props.quoteId);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    // optional: Could validate here
    // send comment to server
    sendRequest({commentData:{text: enteredText}, quoteId: props.quoteId});
    setEnteredText("");
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && 
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea value={enteredText} onChange={textChangeHandler} id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
