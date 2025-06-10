import { styled } from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  width: 100%;
  height: 100%;

  & > header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    padding-bottom: .25rem;
    border-bottom: 1px solid ${({theme}) => theme.purple};

    & > h1{
      font-size: 1.5rem;
      color:  ${({theme}) => theme["base-title"]};
    }

    & > button > svg{
      height: 16px;
      width: 16px;
      color: ${({theme}) => theme["white-purple"]};
    }

    & > button{
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${({theme}) => theme.purple};
      border-radius: 50%;
      padding: .375rem;
      height: fit-content;

      &:hover{
        background-color: ${({theme}) => theme["purple-dark"]};
      }
    }

    & > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0.125rem; 

      & > svg{
        display: block;
      }

      & > span{
        height: 1rem;
        line-height: 1rem;
      }
    }
  } 

  & > main{
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 1.5rem;

    & > div{
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > p{
        text-align: justify;
      }
    }
  }
`
