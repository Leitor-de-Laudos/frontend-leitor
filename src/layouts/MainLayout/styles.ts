import styled from 'styled-components';


export const LayoutContainer = styled.div`
  position: relative;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  
`;

export const ContainerRound = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0; /* fica atrás do conteúdo */
  background-color: ${({ theme }) => theme.purple};
  width: 120%;
  height: 240px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  pointer-events: none;
`;