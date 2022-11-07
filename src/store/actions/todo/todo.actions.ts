import {TodoInterface} from "../../interfaces";
import {ADD_TODO, GET_TODOS, REMOVE_TODO, UPDATE_TODO} from "./todo.action.types";
import {Dispatch} from "react";
import {addTodoToService, deleteTodoToService, getAllTodo, updateTodoToService} from "../../service";
import {AxiosResponse} from "axios";

export const getTodos = () =>
{
    return async (dispatch:Dispatch<any>)=>{
        await getAllTodo().then((res:AxiosResponse<TodoInterface[]>)=>{
            console.log("getAllTodo", res)
            dispatch({type: GET_TODOS, payload: res.data as TodoInterface[] })
        });
    }
}

export const addTodo = (todo: TodoInterface) =>
{
    return async (dispatch:Dispatch<any>)=>{
        await addTodoToService(todo).then((res:AxiosResponse<TodoInterface>)=>{
            dispatch({type: ADD_TODO, payload: res.data as TodoInterface })
        });
    }
}

export const updateTodo = (todo: TodoInterface) =>
{
    return async (dispatch:Dispatch<any>)=>{
        await updateTodoToService(todo).then((res:AxiosResponse<TodoInterface>)=>{
            dispatch({type: UPDATE_TODO, payload: res.data as TodoInterface })
        });
    }
}

export const removeTodo = (todo: TodoInterface) =>
{
    return async (dispatch:Dispatch<any>)=>{
        await deleteTodoToService(todo).then((res:AxiosResponse<TodoInterface>)=>{
            console.log("remove todo", res)
            dispatch({type: REMOVE_TODO, payload: res.data as TodoInterface })
        });
    }
}