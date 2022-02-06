import React from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/button/Button";
function CheckedModal({ showModal, onCancel, onDoneTask }) {
    return (
        <>
            {showModal && showModal.type === "checked" && (
                <Modal title={showModal.title} message={showModal.message}>
                    <Button onClick={onCancel} className="cancel-btn">
                        Cancel
                    </Button>
                    <Button onClick={onDoneTask} className="checked-btn">
                        Done
                    </Button>
                </Modal>
            )}
        </>
    );
}

export default CheckedModal;
