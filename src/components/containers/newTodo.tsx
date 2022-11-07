import React, {ChangeEvent, useState} from 'react';
import {OutlinedInput} from "../input";
import {AddButton} from "../buttons";
import Grid from "@mui/material/Unstable_Grid2";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoAction from "../../store/actions/todo/todo.actions";

export const NewTodo = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [todoActions] = useState(bindActionCreators(todoAction, useDispatch()))

    const inputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const addClick = () => {
        todoActions.addTodo({description:inputValue});
        setInputValue('');
    }

    return (
        <Grid container spacing={2} className="todo p-5">
            <Grid md={10} xs={10}>
                <OutlinedInput textChange={inputChange} value={inputValue} label="New Todo"/>
            </Grid>
            <Grid md={2} xs={2} className="item-center">
                <AddButton click={addClick}/>
            </Grid>
        </Grid>
    );
}