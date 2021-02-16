import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const Hamburger = styled.div`
  display:none;
  @media screen and (max-width: 767px) {
    display:block;
  }
`;

export const HeaderContainer = styled.div`
    background-color: white;
    width: 100%;
;`

export const HeaderNav = styled.header`
    background-color: white;
    height: 60px;
    width: 100%;
    box-shadow: 0px 8px 10px #ccc;
    display:flex;
    flex-direction:row; 
    justify-content:right;
    align-items:center;
;`

export const Container = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    float: right;
    height: 100%;
    align-content: center;
    align-items: center;
    margin-right: 10px;
    @media screen and (max-width: 767px) {
      flex-direction:column;
      display: flex;

    }
;`

export const ButtonDiv = styled.div`
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
