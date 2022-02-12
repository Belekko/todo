import React from "react";
import { CHECKED } from "../../constants";
import { useEvent } from "../../eventContext";
import Modal from "../Modal/Modal";
import Button from "../UI/button/Button";
function CheckedModal() {
    const { showModal, onCancel, onDoneHandler } = useEvent();
    return (
        <>
            {showModal && showModal.type === CHECKED && (
                <Modal title={showModal.title} message={showModal.message}>
                    <Button onClick={onCancel} className="cancel-btn">
                        Cancel
                    </Button>
                    <Button onClick={onDoneHandler} className="checked-btn">
                        Done
                    </Button>
                </Modal>
            )}
        </>
    );
}

export default CheckedModal;
