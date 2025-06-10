import { styled } from "styled-components";

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 80px 1fr; /* largura fixa para a coluna da data */
  background-color: ${({ theme }) => theme["purple-light"]};
  border-radius: 14px;
  padding: 1.125rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 380px; /* controle da largura máxima */
  min-width: 380px;
  box-sizing: border-box;
  gap: 0.5rem;

  transition: all 0.2s ease-in-out;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
              0 2px 4px rgba(0, 0, 0, 0.07),
              0 4px 8px rgba(0, 0, 0, 0.07),
              0 8px 16px rgba(0, 0, 0, 0.07),
              0 16px 32px rgba(0, 0, 0, 0.07);
  
  &:hover{
    scale: 1.05;
  }
`;


export const DataColuna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 6px;

  width: 100%;

  & > button{
    outline: none;
    border: none;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 26px;
    height: 26px;
    
    padding: 4px;

    border-radius: 4px;
    border: 1px solid rgba(255, 0, 0, 0.7);

    transition: background 0.2s ease-in-out;

    & > svg{
      height: 22px;
      width: 22px;
      color: rgba(255, 0, 0, 0.7);
    }

    &:hover{
      background-color: rgba(255, 0, 0, 0.7);
      scale: 1.05;

      & > svg{
        height: 22px;
        width: 22px;
        color: ${({theme}) => theme.white};
      }
    }
  }
`

export const CirculoData = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.125rem;
  align-items: center;
  color: ${({theme}) => theme.white};
  background-color: ${({theme}) => theme.purple};
  text-align: center;

  & small {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
  }
`


export const ColunaDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.purple};
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;


export const LineItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.3rem;
  gap: 1rem;

  .text {
    color: #fff;
    font-size: 0.9rem;
    white-space: pre-wrap;
    word-break: break-word;
    flex: 1;
  }

  .time {
    color: #fff;
    font-size: 0.9rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
`;


