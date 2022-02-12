import { ADD, DELETE, CHECKED, EDIT } from "./constants";

export const todoReducer = (state, action) => {
    console.log(action.type);
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.payload.name,
                    completed: false,
                },
            ];

        case CHECKED:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        case DELETE:
          console.log('hello world  ')
            return state.filter((todo) => todo.id !== action.payload.id);
        case EDIT:
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
