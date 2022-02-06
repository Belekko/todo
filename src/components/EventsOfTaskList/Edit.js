import React, { useRef } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/button/Button";
import styled from "styled-components";

const Input = styled.input`
    border-radius: 7px;
    width: 380px;
    background-color: white;
    height: 35px;
    border: 1px solid rgba(0, 0, 0, 0.75);
    outline: none;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.75);
    margin-right: 100px;
`;

function EditModal({ showModal, onCancel, getId, dispatch, setShowModal }) {
    const editRef = useRef("");

    const onEdit = () => {
        dispatch({
            type: "edit",
            payload: { id: getId, editName: editRef.current.value },
        });
        setShowModal(null);
    };
    return (
        <>
            {showModal && showModal.type === "edit" && (
                <Modal title={showModal.title} message={showModal.message}>
                    <Input ref={editRef} type="text" />
                    <Button onClick={onCancel} className="cancel-btn">
                        Cancel
                    </Button>
                    <Button onClick={onEdit} className="ok-btn">
                        OK
                    </Button>
                </Modal>
            )}
        </>
    );
}

export default EditModal;
