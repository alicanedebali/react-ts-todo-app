import React from 'react';
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {ButtonInterface} from "../../store";

export const DeleteButton = ({click}: ButtonInterface) => {
    return (
        <IconButton edge="end" aria-label="comments" onClick={click}>
            <DeleteIcon color="error"/>
        </IconButton>
    );
}
