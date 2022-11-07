import {TodoInterface} from "../interfaces";
import {ActionInterface} from "../interfaces/action/action";
import {ADD_TODO, GET_TODOS, REMOVE_TODO, UPDATE_TODO} from "../actions";

const initialState: { todos?: TodoInterface[] } = {
    todos: undefined
}

export const todoReducer = (state = initialState, action: ActionInterface<TodoInterface[] | TodoInterface>) => {
    switch (action.type) {
        case GET_TODOS:
            return {todos: action.payload}
        case ADD_TODO: {
            const newTodo = action.payload as TodoInterface;
            const todos = state?.todos || [];
            return {todos: [...todos, {...newTodo}]}
        }
        case UPDATE_TODO: {
            const updatedTodo = action.payload as TodoInterface;
            const todos = state.todos?.map(todo => {
                if (todo.id === updatedTodo.id) {
                    todo = updatedTodo;
                }
                return todo;
            }) || [updatedTodo];
            return {todos: [...todos]}
        }

        case REMOVE_TODO: {
            const removedTodo = action.payload as TodoInterface;
            return {todos: state.todos?.filter(todo => todo.id !== removedTodo?.id)}
        }
        default:
            return state
    }
}