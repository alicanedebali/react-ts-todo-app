import React, {ChangeEvent} from 'react';
import {OutlinedInput} from "../input";
import {AddButton} from "../buttons";
import Grid from "@mui/material/Unstable_Grid2";

export const NewTodo = () => {
    const inputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log("inputChange ", e.target.value)
    }

    const addClick=()=>{
        console.log("Add button clicked")
    }

    return (
        <Grid container spacing={2} className="todo p-5">
            <Grid md={10} xs={10}>
                <OutlinedInput textChange={inputChange} label="New Todo"/>
            </Grid>
            <Grid md={2} xs={2} className="item-center">
                <AddButton click={addClick}/>
            </Grid>
        </Grid>
    );
}