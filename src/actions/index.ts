import axios from "../api/axios";
import { Dispatch } from "redux";
import { Todo, FetchTodosAction, DeleteTodoAction } from "./interfaces";
import ActionTypes from "./types";

export const fetchTodos = (): ((dispatch: Dispatch) => Promise<void>) => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>("/");

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data,
        });
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id,
    };
};
