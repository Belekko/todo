import React, { useRef, useState } from "react";
import Button from "./UI/button/Button";
import classes from "./AddTodo.module.css";
import Modal from "./Modal/Modal";

function AddTodo({ dispatch }) {
    const nameRef = useRef("");
    const [modal, setModal] = useState(false);
    const handleSubmit = () => {
        if (nameRef.current.value.trim().length === 0) {
            setModal({
                title: "Warning",
                message: "Type something...",
                type: true,
            });
        } else {
            dispatch({ type: "add", payload: { name: nameRef.current.value } });
            nameRef.current.value = "";
        }
    };
    const onOkHandler = () => {
        setModal(false);
    };
    return (
        <div className={classes["add-block"]}>
            {modal && (
                <Modal title={modal.title} message={modal.message}>
                    <Button onClick={onOkHandler} className={classes["ok-btn"]}>
                        OK
                    </Button>
                </Modal>
            )}
            <input className={classes.input} type="text" ref={nameRef} />
            <Button className={classes.btn} onClick={handleSubmit}>
                ADD
            </Button>
        </div>
    );
}

export default AddTodo;
