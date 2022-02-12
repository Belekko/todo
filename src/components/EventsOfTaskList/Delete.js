import React from "react";
import { DELETE } from "../../constants";
import { useEvent } from "../../eventContext";
import Modal from "../Modal/Modal";
import Button from "../UI/button/Button";
function DeleteModal() {
    const {showModal,onCancel, onDeleteSure}= useEvent()
    return (
        <>
            {showModal && showModal.type === DELETE && (
                <Modal title={showModal.title} message={showModal.message}>
                    <Button onClick={onCancel} className="cancel-btn">
                        Cancel
                    </Button>
                    <Button onClick={onDeleteSure} className="delete-btn">
                        Delete
                    </Button>
                </Modal>
            )}
        </>
    );
}

export default DeleteModal;
