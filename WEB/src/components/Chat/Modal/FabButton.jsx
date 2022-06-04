import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { SET_IS_MODAL_OPEN } from '../../../store/app';

export default function FabButton() {

    const dispatch = useDispatch()

    return (
        <Fab
            color="success"
            aria-label="add"
            onClick={() => dispatch(SET_IS_MODAL_OPEN(!isOpen))}
            sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
            }}>
            <AddIcon />
        </Fab>
    )
}