import styled from "styled-components";

export const HistoricContainer = styled.main`
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
        font-size: 2.25rem;
        color:  ${({theme}) => theme["base-title"]};
      }

      & > span > a{
        height: 16px;
        width: 16px;
        color: ${({theme}) => theme["white-purple"]};
      }
      & > span{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({theme}) => theme.purple};
        border-radius: 50%;
        padding: .375rem;
        height: fit-content;
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
`