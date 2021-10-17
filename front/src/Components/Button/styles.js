import styled from "styled-components";

export const Container = styled.button`
    width: 70px;
    height: 40px;
    background-color: #F9A826;
    color: #fff;
    text-align: center;
    box-shadow: 0px 1px 0px 0px #fff6af;
	border-radius:6px;
	border:1px solid #F9A826;
	display:inline-block;
	cursor:pointer;
	font-weight:bold;
	text-decoration:none;

    &:active {
	position:relative;
	top:1px;
}
`;