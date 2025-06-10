import { styled } from "styled-components";

export const InputDosageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.125rem;
    color: ${({ theme }) => theme["base-title"]};
  }

  .input-wrapper {
    display: flex;
    gap: 0.5rem;

    input {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme["base-hover"]};
      background-color: ${({ theme }) => theme["purple-light"]};
      color: ${({ theme }) => theme["base-title"]};
      font-size: 1rem;
    }

    select {
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme["purple-medium"]};
      background-color: ${({ theme }) => theme["purple-light"]};
      color: ${({ theme }) => theme["base-title"]};
      font-size: 1rem;

      &:focus{
        border: 1px solid ${({ theme }) => theme["purple-medium"]};
        outline: none;
      }
    }
  }
`;
