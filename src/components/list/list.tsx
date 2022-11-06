import React from 'react';
import {TodoListItem} from "./item";
import {List} from "@mui/material";
import {TodoInterface} from "../../store";

export const TodoList = (props: { todoList: TodoInterface[]}) => {
    return (
        <List sx={{ width: '100%'}}>
            {props.todoList.map((item, index) => (
                <TodoListItem key={index} item={item}/>
            ))}
        </List>

    );
}