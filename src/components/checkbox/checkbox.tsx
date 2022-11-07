import React from 'react';
import {Checkbox} from "@mui/material";
import {CheckboxInterface} from "../../store";

export const CheckBox =({id, checked}:CheckboxInterface)=> {
    return (
        <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': id?.toString() }}
        />
    );
}