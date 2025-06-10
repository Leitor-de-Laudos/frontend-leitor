import styled, { css } from "styled-components";

interface ButtonProps {
  $isActive?: boolean;
  $isMain?: boolean;
}

export const ContainerNavBar = styled.nav`
  position: fixed;
  z-index: 999;
  bottom: 30px;

  background-color: ${({ theme }) => theme.purple};
  width: 70%;
  height: 44px;
  border-radius: 24px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;

export const NavButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  border-radius: 50%;

  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease, transform 0.2s ease;

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      background-color: ${theme["purple-dark"]};
      transform: scale(1.05); // pequeno destaque sutil
    `
  };
  
  ${({ $isMain, theme }) =>
    $isMain &&
    css`
      position: relative;
      height: 3rem;
      width: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme["purple-dark"]};
    `
  };
`;