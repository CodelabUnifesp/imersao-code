import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 95%;
    height: 60%;
    background-color: #F9A826;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const StyledLink = styled(Link)`
    margin-left: 30px;
    text-decoration: none;
    color: white;
`;
