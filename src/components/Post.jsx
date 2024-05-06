//Esse arquivo corresponde a page em svelte
import classes from "./Post.module.css";

// eslint-disable-next-line react/prop-types
export function Post({ author, body }) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );
}
