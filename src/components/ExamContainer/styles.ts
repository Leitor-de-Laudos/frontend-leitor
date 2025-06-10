import styled from "styled-components";

export const ExamContainerStyle = styled.main`
  margin-top: 1.75rem ;
  width: 100%;
  border-radius: 12px;
  background-color: ${({theme}) => theme["purple-medium"]};
  box-shadow: 0 0 0 8px rgba(143, 135, 241, 0.28);
  color: ${({theme}) => theme["white-purple"]};

  display: flex;
  flex-direction: column;
  padding: .75rem;
  gap: .5rem;

  & > section{
    display: flex;
    justify-content: space-between;

    & > a{
      color: inherit;
      text-decoration: none;
    }
  }
`