import { styled } from "styled-components";

export const ContainerHome = styled.div`
    position: absolute;
    z-index: 2;
    padding: 5%;
    width: 100%;
    height: 100%;
`
export const ContainerProfile = styled.header`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 30px;

    & > div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: right;
        margin-right: .75rem;

        color: ${({theme}) => theme.white};
        & > h1{
            font-size: 1.25rem;
            font-weight: 400;
            font-family: "League Spartan", sans-serif;
        }
        & > h2{
            font-size: 1rem;
            font-weight: 400;
            font-family: "League Spartan", sans-serif;
        }
    }


    & > button{
        height: 38px;
        width: 38px;
        background: transparent;
        outline: none;
        border: none;
        border-radius: 50%;
        overflow: hidden;
        

        & > img{
            height: 100%;
            width: 100%;
        }
    }
`