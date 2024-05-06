import classes from "./NewPost.module.css";

// eslint-disable-next-line react/prop-types
export default function NewPost({ onBodyChange, onAuthorChange }) {
    // //Cria um novo estado para o componente, ele retorna algo como array,
    // //onde o primeiro elemento é o estado atual e o segundo é uma função que permite atualizar o estado
    // const [enteredBody, setEnteredBody] = useState("");
    // //o enteredBody é o estado atual e o setEnteredBody é a função que atualiza o estado
    // function changeBodyHandler(event) {
    //     setEnteredBody(event.target.value);
    // }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={onAuthorChange} />
            </p>
        </form>
    );
}
