import React, {useEffect, useState} from 'react';
import {Box, Container} from "@mui/material";
import {ListTodoContainer, NewTodo, Title} from "../../components";
import {AlertInterface, store, TodoInterface} from "../../store";
import {connect, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import * as todoAction from '../../store/actions/todo/todo.actions';
import {responseInterceptor} from "../../utils/functions/responseInterceptor";
import TodoSnackbar from "../../components/snackbar/snackbar";

function Todo({todos, alert}: { todos?: TodoInterface[]; alert?: AlertInterface }) {
    const [mockTodos, setMockTodos] = useState<TodoInterface[]>([])
    const [todoActions] = useState(bindActionCreators(todoAction, useDispatch()))
    useEffect(() => {
        responseInterceptor(store);
    }, [])

    useEffect(() => {
        if (todos === undefined) todoActions.getTodos();
        else setMockTodos([...todos])
    }, [todoActions, todos])

    useEffect(() => {
        console.log("alert ", alert)
    }, [alert])
    return (
        <>
            {alert && <TodoSnackbar severity={alert.severity} message={alert.message}/>}
            <Container fixed>
                <Box sx={{flexGrow: 1}}>
                    <Title title="Todo List"/>
                    <NewTodo/>
                    <ListTodoContainer todos={mockTodos}/>
                </Box>
            </Container>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return ({
        ...state.todoReducer,
        ...state.alertReducer
    })
};

export default connect(mapStateToProps)(Todo);