import React from "react";
import { useContext, useEffect, useReducer } from "react";
import { todoReducer } from "./reducer";

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const localData = JSON.parse(localStorage.getItem("task"));
    const [todos, dispatch] = useReducer(
        todoReducer,
        localData ? localData : []
    );
    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(todos));
    }, [todos]);

    const data = {
        dispatch,
        todos,
    };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
