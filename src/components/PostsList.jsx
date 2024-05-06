import { Post } from "./Post";
import classes from "./PostsList.module.css";

export default function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author={"Larissa"} body={"I like React.js"} />
            <Post author={"Beatriz"} body={"React.js is cool!"} />
        </ul>
    );
}
