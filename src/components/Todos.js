import React, { useState } from "react";
import Button from "./UI/button/Button";
import Card from "./UI/card/Card";
import "./Todos.css";
import DeleteModal from "./EventsOfTaskList/Delete";
import CheckedModal from "./EventsOfTaskList/Checked";
import EditModal from "./EventsOfTaskList/Edit";

function Todos({ todos, dispatch }) {
    const [getId, setGetId] = useState("");
    const [showModal, setShowModal] = useState(null);

    const onCheckedHandler = (id) => {
        setGetId(id);
        setShowModal({
            title: "Do you have finish?",
            message: "Are you sure?",
            type: "checked",
        });
    };
    const onDoneHandler = () => {
        dispatch({
            type: "checked",
            payload: { id: getId },
        });
        setShowModal(null);
    };

    const onDeleteHandler = (id) => {
        setShowModal({
            title: "Do you wanna delete?",
            message: "Are you sure?",
            type: "delete",
        });
        setGetId(id);
    };

    const onDeleteSure = () => {
        dispatch({
            type: "delete",
            payload: { id: getId },
        });
        setShowModal(null);
    };

    const onCancel = () => {
        setShowModal(null);
    };

    const onEditHandler = (id) => {
        setShowModal({
            type: "edit",
            title: "Changing...",
            message: "Write new task...",
        });
        setGetId(id);
    };

    let showTasks = <p className="p">No tasks...</p>;
    if (todos.length > 0) {
        showTasks = todos.map((el, id) => {
            return (
                <li key={el.id} className="li">
                    {`${id + 1}.`}
                    <span className={el.completed ? "done" : ""}>
                        {el.name}{" "}
                    </span>
                    <input
                        type="checkbox"
                        checked={el.completed}
                        onChange={() => onCheckedHandler(el.id)}
                    />
                    <img
                        onClick={() => onEditHandler(el.id)}
                        className="edit"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdo9PCv3QzhygdQD0NTEPA2pQDT3AL8NKjk3SQLJN_tundEh916m1Q2Jpgtz8VfHFxH8&usqp=CAU"
                        alt="edit-icon"
                    />
                    <Button
                        className="inList-delete"
                        onClick={() => onDeleteHandler(el.id)}
                    >
                        delete
                    </Button>
                </li>
            );
        });
    }

    return (
        <Card>
            <CheckedModal
                showModal={showModal}
                onCancel={onCancel}
                onDoneTask={onDoneHandler}
            />
            <EditModal
                showModal={showModal}
                onCancel={onCancel}
                getId={getId}
                dispatch={dispatch}
                setShowModal={setShowModal}
            />
            <DeleteModal
                showModal={showModal}
                onCancel={onCancel}
                onDeleteSure={onDeleteSure}
            />
            <ul>{showTasks}</ul>
        </Card>
    );
}

export default Todos;
