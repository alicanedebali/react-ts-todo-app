import React from 'react';
import {Typography} from "@mui/material";

export const Title =({title}:{title:string})=> {
    return (
        <Typography variant="h2" gutterBottom>
            {title}
        </Typography>
    );
}