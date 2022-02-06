import React, { useEffect, useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "add":
                return [
                    ...state,
                    {
                        id: Date.now(),
                        name: action.payload.name,
                        completed: false,
                    },
                ];

            case "checked":
                return state.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                });
            case "delete":
                return state.filter((todo) => todo.id !== action.payload.id);
            case "edit":
                return state.map((el) => {
                    if (el.id === action.payload.id) {
                        el.name = action.payload.editName;
                    }
                    return el;
                });
            default:
                return state;
        }
    };

    const localData = JSON.parse(localStorage.getItem("task"));
    const [todos, dispatch] = useReducer(reducer, localData ? localData : []);

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(todos));
    }, [todos]);
    return (
        <>
            <AddTodo dispatch={dispatch} />
            <Todos todos={todos} dispatch={dispatch} />
        </>
    );
}

export default App;
