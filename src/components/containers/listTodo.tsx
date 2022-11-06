import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {TodoList} from "../list";
import {TodoInterface} from "../../store";

export const ListTodoContainer =({todos}: { todos: TodoInterface[] })=> {
    return (
        <Grid container spacing={2} className="todo">
            <Grid md={12} xs={12}>
                <div className="card">
                    <TodoList todoList={todos} />
                </div>
            </Grid>
        </Grid>
    );
}