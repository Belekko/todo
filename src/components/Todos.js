// import React, { useState } from "react";
import Button from "./UI/button/Button";
import Card from "./UI/card/Card";
import "./Todos.css";
import DeleteModal from "./EventsOfTaskList/Delete";
import CheckedModal from "./EventsOfTaskList/Checked";
import EditModal from "./EventsOfTaskList/Edit";

import { useData } from "../context";
import { useEvent } from "../eventContext";

function Todos() {
    const { todos } = useData();
    const { onCheckedHandler, onEditHandler, onDeleteHandler } = useEvent();

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
            <CheckedModal />
            <EditModal />
            <DeleteModal />
            <ul>{showTasks}</ul>
        </Card>
    );
}

export default Todos;
