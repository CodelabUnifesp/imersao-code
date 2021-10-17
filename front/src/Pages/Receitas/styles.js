import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
`;

export const RecipesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    svg{
        margin: 0 10px;
    }
`;

export const OverlayContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(196, 196, 196, 0.8);
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

export const OverlayContent = styled.div`
    z-index: 99;
    position: absolute;
    opacity: 1;
    width: 50%;
    min-height: 60%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
`;


export const FieldRow = styled.div`
    width: ${props => props.width || "100%"};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || "flex-start"};
    margin: 5px 0;

    
    input{
        padding: 2px;
        margin: 5px 0;
        border: 1px solid #F9A826;
        border-radius: 5px;
    }

    textarea{
        padding: 2px;
        margin: 5px 0;
        border: 1px solid #F9A826;
        border-radius: 5px;
        resize: none;
        width: 100%;
        height: 100px;
    }
`;