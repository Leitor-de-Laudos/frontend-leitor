import { styled } from "styled-components";

interface InputProps {
  $fileAccept : boolean;
}

export const ReaderContainer = styled.div`
  position: absolute;
  z-index: 2;
  padding: 5%;
  width: 100%;
  height: 100%;

  & > form{
    margin-top: 50%;

    & > button{
      width: 100%;
      padding: 5%;
      outline: none;
      border: 2px solid ${({ theme }) => theme["purple-dark"]};
      border-radius: 6px;

      background-color: transparent;

      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme["purple-dark"]};

      &:hover{
        background-color: ${({ theme }) => theme["purple-dark"]};
        color: ${({ theme }) => theme["white-purple"]};
      }
    }
  }

  & > a{
    display: inline-flex;
    align-items: center;
    gap: .25rem;
    text-decoration: none;
    line-height: 100%;

    color: ${({ theme }) => theme["base-title"]};

    & > span{
      font-size: 1.25rem;
    }
  }

  & > header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1rem;

    & > h1{
      margin-top: 17.5%;
      font-size: 2rem;
    }
  }
`;

export const ReaderFileContainerInForm = styled.div<InputProps>`
  margin: 10% auto;
  
  border: 2px dashed ${({ theme }) => theme["purple-dark"]};
  border-radius: 12px;
  padding: 4rem 2rem;
  text-align: center;
  transition: border-color 0.3s;
  width: 100%;
  max-width: 500px;

  background-color: ${({ $fileAccept, theme }) =>
    $fileAccept ? theme["purple-light"] : "transparent"};

  &:hover {
    border-color: ${({ theme }) => theme["purple-dark"]};
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  color: ${({ theme }) => theme["base-title"]};
  font-size: 1rem;

  svg {
    color: ${({ theme }) => theme["purple-dark"]};
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
    color: ${({ theme }) => theme["purple-dark"]};
  }

  span {
    font-weight: 500;
  }
`;
