import styled from "styled-components";

export const ArchivesContainer = styled.div`
  padding: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: .25rem;
    border-bottom: 1px solid ${({theme}) => theme.purple};

    & > h1{
      font-size: 2.25rem;
      color:  ${({theme}) => theme["base-title"]};
    }

    & > span > a{
      height: 16px;
      width: 16px;
      color: ${({theme}) => theme["white-purple"]};
    }

    & > span{
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${({theme}) => theme.purple};
      border-radius: 50%;
      padding: .375rem;
      height: fit-content;
    }

    & > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0.125rem; 

      & > svg{
        display: block;
      }

      & > span{
        height: 1rem;
        line-height: 1rem;
      }
    }
  }
`

export const GridArquivos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px;
  width: 100%;
  padding: 3rem;
`;