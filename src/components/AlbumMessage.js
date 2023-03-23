import React from 'react';
import styled from 'styled-components';

// This is where you will add the "You need more albums"
// "Let's start playing some music!" depending on the loop results
const AlbumMessage = (props) => {
    return (
    <>
    <Message>{props.MessageContent}</Message>
    </>
    );
}

export default AlbumMessage;

const Message = styled.h3`
    text-align: center;
    background-color: teal;
`
