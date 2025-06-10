import { styled } from "styled-components";

export const ContainerReminder = styled.main`
  padding: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > header{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: start;

    padding-bottom: .25rem;
    border-bottom: 1px solid ${({theme}) => theme.purple};

    & > h1{
      margin-left: .25rem;
      font-size: 2.25rem;
      color:  ${({theme}) => theme["base-title"]};
    }

    & > a{
      height: 24px;
      width: 24px;
      color: ${({theme}) => theme["base-title"]};

      & > svg{
        color: inherit;
      }
    }
  }
`
export const ContainerReminderForm = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  & > section{
    display: grid;
    gap: .325rem;
  }

  & label{
    font-size: 1.125rem;
    color: ${({theme}) => theme["base-title"]};
  }

  & input{
    border: none;
    outline: none;

    width: 100%;
    height: 2.75rem;
    padding: .75rem;
    background-color: ${({theme}) => theme["purple-light"]};
    border-radius: 12px;
  }

  & button{
    margin-top: 1rem;

    border: none;
    outline: none;
    width: 100%;

    background-color: ${({theme}) => theme.purple};
    color: ${({theme}) => theme.white};
    font-size: 1.125rem;
    font-weight: 600;
    padding: .75rem;
    border-radius: 12px;
  }
`