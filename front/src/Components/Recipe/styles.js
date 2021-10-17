import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #C4C4C4;
    font-weight: bold;
    margin-top:20px;

    img{
        margin-right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;


export const IconsContainer = styled.div`
    margin-left: auto;
`;