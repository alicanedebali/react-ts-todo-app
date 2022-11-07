import React, {useEffect, useState} from 'react';
import {Box, Container} from "@mui/material";
import {Title, ListTodoContainer, NewTodo} from "../../components";
import {TodoInterface} from "../../store";
import {connect, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import * as todoAction from '../../store/actions/todo/todo.actions';

function Todo({todos}: { todos?: TodoInterface[] }) {
    const [mockTodos, setMockTodos] = useState<TodoInterface[]>([])
    const [todoActions] = useState(bindActionCreators(todoAction, useDispatch()))
    useEffect(() => {
        if (todos === undefined) todoActions.getTodos();
        else setMockTodos([...todos])
    }, [todoActions, todos])
    return (

        <Container fixed>
            <Box sx={{flexGrow: 1}}>
                <Title title="Todo List"/>
                <NewTodo/>
                <ListTodoContainer todos={mockTodos}/>
            </Box>
        </Container>
    );
}

const mapStateToProps = (state: any) => ({
    ...state.todoReducer
});

export default connect(mapStateToProps)(Todo);