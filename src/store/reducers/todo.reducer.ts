import {TodoInterface} from "../interfaces";
import {ActionInterface} from "../interfaces/action/action";
import {ADD_TODO, GET_TODOS, REMOVE_TODO, UPDATE_TODO} from "../actions";

const initialState: { todos?: TodoInterface[] } = {
    todos: undefined
}

export const todoReducer = (state = initialState, action: ActionInterface<TodoInterface[]>) => {
    switch (action.type) {
        case GET_TODOS:
            return {todos: action.payload}
        case ADD_TODO:
            return {todos: action.payload}

        case UPDATE_TODO:
            return {todos: action.payload}

        case REMOVE_TODO:
            return {todos: action.payload}

        default:
            return state
    }
}