import React from 'react';
import styled from 'styled-components';

const AlbumListing = (props) => {
    return (
    <>
    <StyledDiv>
    <Name>{props.AlbumName}</Name>
    <Artist>{props.AlbumArtist}</Artist>
    <Genre>{props.AlbumGenre}</Genre>
    </StyledDiv>
    </>
    );
}

export default AlbumListing;

const Name = styled.p`
    text-align: center;
    background-color: yellow;
`

const Artist = styled.p`
    text-align: center;
    background-color: pink;
`
const Genre = styled.p`
    text-align: center;
    background-color: orange;
`
const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 40%;
    padding: 10px;
    margin-bottom: 10px;
    border: 2px solid teal;
    border-radius: 15px;
    text-align: center;
`