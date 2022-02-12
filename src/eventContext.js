import React, { useContext, useState, useRef } from "react";
import { CHECKED, DELETE, EDIT, ADD } from "./constants";
import { useData } from "./context";

const EventContext = React.createContext();

export const EventProvider = ({ children }) => {
    const [getId, setGetId] = useState("");
    const [showModal, setShowModal] = useState(null);
    const { dispatch } = useData();
    const nameRef = useRef("");
    const [modal, setModal] = useState(false);

    const onCheckedHandler = (id) => {
        setGetId(id);
        setShowModal({
            title: "Do you have finish?",
            message: "Are you sure?",
            type: CHECKED,
        });
    };
    const onDoneHandler = () => {
        dispatch({
            type: CHECKED,

            payload: { id: getId },
        });
        console.log(getId, CHECKED);
        setShowModal(null);
    };

    const onDeleteHandler = (id) => {
        setShowModal({
            title: "Do you wanna delete?",
            message: "Are you sure?",
            type: DELETE,
        });
        setGetId(id);
    };

    const onDeleteSure = () => {
        dispatch({
            type: DELETE,
            payload: { id: getId },
        });
        setShowModal(null);
    };

    const onCancel = () => {
        setShowModal(null);
    };

    const onEditHandler = (id) => {
        setShowModal({
            type: EDIT,
            title: "Changing...",
            message: "Write new task...",
        });
        setGetId(id);
    };

    const handleSubmit = () => {
        if (nameRef.current.value.trim().length === 0) {
            setModal({
                title: "Warning",
                message: "Type something...",
                type: true,
            });
        } else {
            dispatch({ type: ADD, payload: { name: nameRef.current.value } });
            nameRef.current.value = "";
        }
    };
    const onOkHandler = () => {
        setModal(false);
    };

    const onEnter = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const events = {
        onCheckedHandler,
        onDoneHandler,
        onDeleteHandler,
        onDeleteSure,
        onCancel,
        handleSubmit,
        onOkHandler,
        onEnter,

        showModal,
        setShowModal,
        getId,
        nameRef,
        modal,
        setModal,
        onEditHandler,
        dispatch,
    };

    return (
        <EventContext.Provider value={events}>{children}</EventContext.Provider>
    );
};

export const useEvent = () => useContext(EventContext);
