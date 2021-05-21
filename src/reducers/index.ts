import { combineReducers } from "redux";
import { Todo } from "../actions/interfaces";
import todosReducer from "./todos";

export interface StoreState {
    todos: Todo[];
}

const reducers = combineReducers<StoreState>({
    todos: todosReducer,
});

export default reducers;
