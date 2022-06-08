import Modal from "@mui/material/Modal";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomList } from "../../../store/chat";
import { isModalOpen, SET_IS_MODAL_OPEN } from "../../../store/app";
import FabButton from "./FabButton";
import ModalBody from "./ModalBody";

export default function BaseModal() {

  const isOpen = useSelector(isModalOpen)
  const rooms =  Object.values(useSelector(roomList))


  const dispatch = useDispatch()

  const closeHandler = () => {
    if (rooms.length == 0) return true
    dispatch(SET_IS_MODAL_OPEN(!isOpen))
}

  useEffect(()=>{
    rooms.length == 0 ? dispatch(SET_IS_MODAL_OPEN(true)) : dispatch(SET_IS_MODAL_OPEN(false))
  },[])

  return (
    <>
      {/* MODAL BUTTON */}
      <FabButton/>
      {/* MODAL BODY */}
      <Modal
        open={isOpen}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBody />
      </Modal>
    </>
  );
}
