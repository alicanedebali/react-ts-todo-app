import axios from "axios";
import {TodoInterface} from "../interfaces";

const apiUrl=process.env.REACT_APP_API_URL as string;

export const getAllTodo= ()=>{
    return axios.get(apiUrl)
}

export const addTodoToService= (todo:TodoInterface)=>{
    return axios.post(apiUrl, {...todo})
}

export const updateTodoToService= (todo:TodoInterface)=>{
    return axios.put(apiUrl, {...todo})
}

export const deleteTodoToService= (todo:TodoInterface)=>{
    return axios.delete(apiUrl+ '/'+ todo.id)
}