import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background: white;
    box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
    border-radius: 10px;
`;

function Card(props) {
    return <Div className={`${props.className}`}>{props.children}</Div>;
}

export default Card;
