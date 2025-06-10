import styled from "styled-components";


export const ContainerHistoric = styled.section`
  margin-top: 1.5rem;
  border-top: 1px solid ${({theme}) => theme.purple};

  overflow-y: auto;
  max-height: 360px;

`

export const ContainerReminder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  background-color: ${({theme}) => theme["purple-light"]};
  border-radius: 15px;
  margin-top: 1.5rem;

  & > div{
    background-color: ${({theme}) => theme["purple-medium"]};
    color: ${({theme}) => theme["white-purple"]};
  }

  & > div:nth-child(1){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .125rem;

    height: 58px;
    width: 58px;
    text-align: center;
    padding: .5rem;

    border-radius: 50%;


    & > h1{
      font-size: 1.25rem;
    }

    & > p{
      font-size: .75rem;
      text-transform: uppercase;
    }
  }

  & > div:nth-child(2){
    /* max-height: 58px; */
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: .25rem;

    justify-content: center;
    width: 80%;
    border-radius: 1rem;

    &> h2{
      display: inline-flex;
      width: 100%;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: 400;
    }
    
  }
`