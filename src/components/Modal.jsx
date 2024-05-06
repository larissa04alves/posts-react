import classes from "./Modal.module.css";
//children é uma propriedade especial que permite passar componentes filhos para um componente pai
// eslint-disable-next-line react/prop-types
export default function Modal({ children, onClose }) {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}
