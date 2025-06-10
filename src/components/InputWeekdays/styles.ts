import { styled } from "styled-components";

export const InputWeekDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > label {
    font-size: 1.125rem;
    color: ${({ theme }) => theme["base-title"]};
  }

  & > div {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme["purple-light"]};
    border-radius: 12px;
    flex-wrap: wrap;
  }

  & > div > label {
    position: relative;
    background-color: ${({ theme }) => theme["purple-light"]};
    color: white;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.2s ease;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &.checked {
      background-color: ${({ theme }) => theme["purple"]};
    }

    input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
  }
`;
