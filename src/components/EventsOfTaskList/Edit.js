import React, { useRef } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/button/Button";
import styled from "styled-components";
import { EDIT } from "../../constants";
import { useEvent } from "../../eventContext";

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

function EditModal() {
    const editRef = useRef("");
    const {showModal, onCancel, getId, dispatch, setShowModal}=useEvent()

    const onEdit = () => {
        dispatch({
            type: EDIT,
            payload: { id: getId, editName: editRef.current.value },
        });
        setShowModal(null);
    };
    return (
        <>
            {showModal && showModal.type === EDIT && (
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
