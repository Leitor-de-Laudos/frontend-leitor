import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background: #8079D8;

  box-shadow: 0 0 0 12px rgba(143, 135, 241, 0.28);
  border-radius: 30px;
  padding: 52px;
  position: relative;


  & svg {
    width: 56px;
    height: 56px;
    color: #fff;
  }
  margin-bottom: 8px;

  & > p{
    color: ${({theme}) => theme.white};
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.2;
  }
`