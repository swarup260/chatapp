import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch,useSelector } from 'react-redux';
import { SET_IS_MODAL_OPEN,isModalOpen } from '../../../store/app';

export default function FabButton() {

    const isOpen = useSelector(isModalOpen)
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