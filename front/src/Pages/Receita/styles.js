import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const InfoContainer = styled.div`
    width: 45%;
    margin-top: 20px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;


    textarea{
        width: 100%;
        height: 500px;
        resize: none;
        background-color: #C4C4C4;
    }
`;