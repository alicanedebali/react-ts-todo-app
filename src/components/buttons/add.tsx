import React from 'react';
import {Button} from "@mui/material";
import {ButtonInterface} from "../../store";

export const AddButton =({click}:ButtonInterface )=> {
    return (
        <Button variant="contained" onClick={click}>Add</Button>
    );
}