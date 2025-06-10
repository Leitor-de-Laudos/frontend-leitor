import { styled } from "styled-components";

export const InputHourContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > label {
    font-size: 1.125rem;
    color: ${({ theme }) => theme["base-title"]};
  }

  & > div {
    position: relative;
    width: 100%;
    height: 2.75rem;
    background-color: ${({ theme }) => theme["purple-light"]};
    border-radius: 12px;
    padding: 0 2.5rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    overflow: hidden;

    & > input {
      position: absolute;
      inset: 0; /* top, right, bottom, left = 0 */
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
    }

    & > span {
      color: ${({ theme }) => theme["base-title"]};
      font-size: 1rem;
      z-index: 1;
      pointer-events: none; /* Faz o clique passar direto pro input */
    }

    & > svg {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: ${({ theme }) => theme["base-title"]};
      z-index: 1;
      pointer-events: none; /* Faz o clique passar direto também */
    }
  }
`;
