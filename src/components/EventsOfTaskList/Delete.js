import React from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/button/Button";
function DeleteModal({showModal, onCancel, onDeleteSure}) {
    return (
        <>
            {showModal && showModal.type === 'delete' && (
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
