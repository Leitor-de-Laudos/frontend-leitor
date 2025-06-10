import { styled } from "styled-components";

export const ContainerProfile= styled.main `
  position: absolute;
  z-index: 2;
  padding: 5%;
  width: 100%;
  height: 100%;
`

export const ProfileMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  & > div{
    margin-block: 2rem .75rem;
    display: flex;
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 50%;

    background-image: url("https://i.pinimg.com/474x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    & > span{
      margin-top: auto;
      margin-left: auto;
      display: flex;
      width: fit-content;
      border-radius: 50%;
      padding: .25rem;
      background-color: ${({theme}) => theme["purple-dark"]};
      color: ${({theme}) => theme.white};

      & > svg{
        
      }
    }
  }

  & > h1{
    font-size: 1.5rem;
  }

  & > h2{
    font-size: 1.25rem;
  }
`

export const ContainerOptionsInfo = styled.div`
  margin-top: 3rem;
  width: 100%;

  display: flex; 
  flex-direction: column;
  gap: 1rem;
  
  & > div{
    display: flex;
    align-items: center;
    gap: .5rem;

    & > span{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({theme}) => theme.purple};
      color: ${({theme}) => theme.white};
      padding: .75rem;
      border-radius: 50%;
    }

    & > a{
      text-decoration: none;
      color: ${({theme}) => theme["base-title"]};
      font-size: 1.125rem;
      font-weight: 500;
    }

    & > p{
      font-size: 1.125rem;
      font-weight: 500;
    }
  }
`