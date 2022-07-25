import React from 'react'; 
import styled from 'styled-components';

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Div1 = styled.div`
color: white;
margin-left: 12px;
margin-right: 12px;

`
const Button = styled.button`
    background-color: white;
    border: 2px solid white;
    border-radius: 8px;
    color: black;
    width: 90px;
    &:hover{
        cursor: pointer;
        background-color: darkgray;
        border: 2px solid darkgray;
    }
`

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <Div>
            <Button onClick = {onLeftClick}>voltar</Button>
            <Div1>{page} de {totalPages}</Div1>
            <Button onClick = {onRightClick}>próxima</Button>
        </Div>
    )
};

export default Pagination;