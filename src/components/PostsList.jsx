import { useState } from "react";
import { Post } from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

// eslint-disable-next-line react/prop-types
export default function PostsList({ isPosting, onStopPosting }) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    let modalContent;

    if (isPosting) {
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>
        );
    }

    return (
        <>
            {modalContent}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
            </ul>
        </>
    );
}
