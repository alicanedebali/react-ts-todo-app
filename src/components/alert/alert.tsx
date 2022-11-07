import React from 'react';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

export const TodoAlert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});