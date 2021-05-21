import { Todo, Action } from "../actions/interfaces";
import ActionTypes from "../actions/types";

const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo): boolean => {
                return todo.id !== action.payload;
            });
        default:
            return state;
    }
};

export default todosReducer;
