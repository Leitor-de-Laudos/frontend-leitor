import { createGlobalStyle } from "styled-components";

export const  GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "League Spartan", sans-serif;
    font-optical-sizing: auto;

    font-size: 100%;
  }

  html, body{
    overflow-x: hidden;
  }
`;