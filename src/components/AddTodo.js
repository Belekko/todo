// import React, { useRef, useState } from "react";
import Button from "./UI/button/Button";
import classes from "./AddTodo.module.css";
import Modal from "./Modal/Modal";
import { useEvent } from "../eventContext";

function AddTodo() {
    const { onOkHandler, nameRef, onEnter, handleSubmit, modal } = useEvent();
    return (
        <div className={classes["add-block"]}>
            {modal && (
                <Modal title={modal.title} message={modal.message}>
                    <Button onClick={onOkHandler} className={classes["ok-btn"]}>
                        OK
                    </Button>
                </Modal>
            )}
            <input
                className={classes.input}
                type="text"
                ref={nameRef}
                onKeyUp={onEnter}
            />
            <Button className={classes.btn} onClick={handleSubmit}>
                ADD
            </Button>
        </div>
    );
}

export default AddTodo;
