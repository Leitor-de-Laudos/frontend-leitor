import styled from "styled-components";

export const ContainerInputCPF = styled.div`
  & > input{
      border: 1px solid ${({theme}) => theme.white};
      background-color: transparent;
      padding: 1rem;
      width: 100%;
      border-radius: 12px;
      outline: none;
      color: rgba(255, 255, 255, 1);
      font-weight: 500;
      font-size: .875rem;

      &::placeholder{
          color: rgba(255, 255, 255, 0.6);
          font-weight: 400;
      }

      &:focus{
          outline: none;
          border: 2px solid ${({theme}) => theme.white};
      }
  }
`