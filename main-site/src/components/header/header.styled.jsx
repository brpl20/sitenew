import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: white;
    width: 100%;
;`

export const HeaderNav = styled.header`
    background-color: white;
    height: 60px;
    width: 100%;
    box-shadow: 0px 8px 10px #ccc;
;`

export const Ul = styled.ul`
    list-style: none;
    margin-right: 100px;
    float: right;
    padding-top: 9.5px;
;`

export const Li = styled.li`
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    display: inline-block;
    line-height: 0px;
    justify-content: center;
;`

export const  Button = styled.button`;
    color: black;
    font-size: 14px;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    border-bottom: 0px;
    cursor: pointer;
    &:focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
    &:hover{
        color: grey;
    }
;`

 
export const GlobalStyleHeader = createGlobalStyle`
    html, body {
        margin:0;
        padding:0;
    }
    h1{
        margin:0;
    }
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
`;
