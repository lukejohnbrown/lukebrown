import React, { Fragment } from 'react';
import { Link } from "gatsby";
import styled, { css } from 'styled-components';

const ButtonStyles = css`
  display: block;
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.palette.text};;
  color: ${({ theme }) => theme.palette.text};
  font-weight: ${({ theme }) => theme.fontWeight[1]};
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
  transition: all 200ms;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.palette.text};
    color: ${({ theme }) => theme.palette.contrastText};;
  }
`;

const NavButton = styled(Link)`${ButtonStyles}`;
const InteractiveButton = styled.button`${ButtonStyles}`;

const Button = ({ buttonText, buttonLink, isNavButton = true, ...restProps }) => {

  return (
    <Fragment>
      {isNavButton ? (
        <NavButton to={buttonLink} {...restProps}>{buttonText}</NavButton>
      ) : (
        <InteractiveButton {...restProps}>{buttonText}</InteractiveButton>
      )}
    </Fragment>
  )
}

export default Button;
