import {Snackbar, Stack} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {AlertInterface} from "../../store";
import {TodoAlert} from "../alert";

function TodoSnackbar(alert?: AlertInterface) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(true)
    }, [alert]);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Stack sx={{width: '100%'}} spacing={2}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} key={"sa"}>
                <TodoAlert onClose={handleClose} severity={alert?.severity || 'success'} sx={{width: '100%'}}>
                    {alert?.message || ''}
                </TodoAlert>
            </Snackbar>
        </Stack>
    );
}

export default TodoSnackbar;