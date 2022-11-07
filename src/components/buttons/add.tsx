import React from 'react';
import {Button} from "@mui/material";
import {ButtonInterface} from "../../store";

export const AddButton =({click,disabled}:ButtonInterface )=> {
    return (
        <Button variant="contained" onClick={click} disabled={disabled}>Add</Button>
    );
}