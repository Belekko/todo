// import React, { useEffect, useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { EventProvider } from "./eventContext";

function App() {
    return (
        <EventProvider>
            <AddTodo />
            <Todos />
        </EventProvider>
    );
}

export default App;
