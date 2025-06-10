import { styled } from "styled-components";

export const ContainerEditInfo = styled.main`
 position: absolute;
  z-index: 2;
  padding: 5%;
  width: 100%;
  height: 100%;

  & > a{
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    color: ${({theme}) => theme["base-title"]};
    

    & > p{
      margin-left: .25rem;
    }
  }

  & > h1{
    margin-top: 3rem;
    text-align: center;
    font-size: 1.5rem;
  }

  & > form{
    margin-top: 11rem;
    display: grid;
    gap: 1rem;
    background-color: ${({theme}) => theme["purple-light"]};
    padding: .75rem;
    border-radius: .75rem;

    & > button{
      background-color: ${({theme}) => theme["purple"]};
      border: none;
      outline: none;
      border-radius: 12px;
      padding: 1rem;
      color: ${({theme}) => theme.white};
      font-size: 1.125rem;
      font-weight: 600;

      &:hover{
        background-color: ${({theme}) => theme["purple-dark"]};
      }
    }

    & > div{
      display: flex;
      flex-direction: column;
      gap: .5rem;

      & > input{
        border: 1px solid ${({theme}) => theme.white};
        background-color: transparent;
        padding: 1rem;
        width: 100%;
        border-radius: 12px;
        outline: none;
        color: rgb(80, 80, 80);
        font-weight: 500;
        font-size: .875rem;

        &::placeholder{
          color: rgba(120, 120, 120, 0.6);
          font-weight: 400;
        }

        &:focus{
          outline: none;
          border: 2px solid ${({theme}) => theme.white};
        }
      }
    }
  }
`