import React from 'react';
import {TextField} from "@mui/material";
import {OutlinedInputInterface} from "../../store";

export const OutlinedInput = ({textChange, label, value}: OutlinedInputInterface) => {
    return (
        <TextField
            id="outlined-basic"
            fullWidth
            label={label}
            value={value}
            variant="outlined"
            onChange={(e) => textChange(e)}
        />
    );
}