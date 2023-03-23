import React from 'react';
import styled from 'styled-components';

// When editing tags you can highlight and then select command + d and 
// all the text will be edited simultaneously as long as the seclected items are related (such as tags)
// you can also select command + d twice to select all related items (ex: tags and variable name)

const Header = (props) => {
    return (
    <>
    <HeaderText>{props.HeaderContent}</HeaderText>
    </>
    );
}

export default Header;

const HeaderText = styled.h1`
    text-align: center;
    background-color: violet;
`
