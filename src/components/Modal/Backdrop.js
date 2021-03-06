import React from "react";
import styled from "styled-components";

const BackdropSDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`;
const Backdrop = (props) => {
    return <BackdropSDiv onClick={props.onConfirm} />;
};

export default Backdrop;
