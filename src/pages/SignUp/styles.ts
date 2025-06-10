import { styled } from "styled-components";

export const ContainerSignUp = styled.div`
    margin-block: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${({theme}) => theme["purple-dark"]};

    & form{
        margin-top: 2rem;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;

        & > div{
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }

        & > div > label{
            color: rgba(255, 255, 255, 1);
            font-weight: 500;
            font-size: 1rem;
        }

        & > div > input{
            border: 1px solid ${({theme}) => theme.white};
            background-color: transparent;
            padding: 1rem;
            width: 100%;
            border-radius: 12px;
            outline: none;
            color: rgba(255, 255, 255, 1);
            font-weight: 500;
            font-size: .875rem;

            &::placeholder{
                color: rgba(255, 255, 255, 0.6);
                font-weight: 400;
            }

            &:focus{
                outline: none;
                border: 2px solid ${({theme}) => theme.white};
            }
        }

        & > button{
            border: 2px solid ${({theme}) => theme.white};
            border-radius: 12px;
            background: transparent;
            color: ${({theme}) => theme.white};
            
            font-size: 1.25rem;
            font-weight: bold;

            padding: 1rem;
            width: 100%;

            &:hover, &:focus, &:active{
                background: ${({theme}) => theme.white};
                color: ${({theme}) => theme.purple};
            }

            &:focus{
                outline: none;
                border: 2px solid ${({theme}) => theme.white};
            }

        }
    }

    & > a{
        margin-top: 1rem;
        color: ${({theme}) => theme["purple-dark"]};
        text-decoration: none;
        font-size: 1.05rem;
        
        & > span{
            font-weight: 600;
            text-decoration: underline;
        }
    }
`;

export const HeaderSignUp = styled.header`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    align-items: center;

    & > h1{
        font-size: 1.75rem;
    }

    & > main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 3rem;
        color: ${({theme}) => theme["base-text"]};

        & > h2{
            font-size: 1.25rem;
        }

        & > svg{
            height: 3.5rem;
            width: 3.5rem;
            color: #FFF;
            background-color: rgba(255,255,255, 0.2);
            padding: .5rem;
            border-radius: 50%;
        }
    }
`
