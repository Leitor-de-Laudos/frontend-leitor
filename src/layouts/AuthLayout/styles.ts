import styled from 'styled-components';

export const LayoutContainer = styled.div`
  background-color: ${({theme}) => theme['purple']};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 5%;
`;