import React from 'react';
import {Box} from "@mui/material";
import {Title, ListTodoContainer, NewTodo} from "../../components";
import {TodoInterface} from "../../store";

export const Todo = () => {
    const todos: TodoInterface[] =
        [{description: 'todo', id: 10, status: 'done'},
            {description: 'doing', id: 20, status: 'done'},
            {description: 'done', id: 30, status: 'done'}];

    return (
        <Box sx={{flexGrow: 1}}>
            <Title title="Todo List"/>
            <NewTodo/>
            <ListTodoContainer todos={todos}/>
        </Box>
    );
};