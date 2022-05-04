import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert'
import { useSelector, useDispatch } from 'react-redux';

import { dailogState } from '../store/app';
import { SET_DAILOGBOX_STATE } from "../store/app";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertDailogBox() {

    const { isOpen, message, type } = useSelector(dailogState)
    const dispatch = useDispatch()
    const handleClose = () => dispatch(SET_DAILOGBOX_STATE({ isOpen: !isOpen, type, message }))


    return (<Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpen}
        autoHideDuration={6000}
    >
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>)
}