import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const ButtonStyles = css`
  display: block;
  text-decoration: none;
  background: ${({ theme }) => theme.palette.text};
  color: white;
  border-radius: 4px;
  font-weight: ${({ theme }) => theme.fontWeight[1]};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  transition: all 200ms;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.palette.pink};
  }

  svg {
    margin-right: ${({ theme }) => theme.space[2]};
  }
`

const ExternalLink = styled.a`
  ${ButtonStyles}
`
const NavButton = styled(Link)`
  ${ButtonStyles}
`
const InteractiveButton = styled.button`
  ${ButtonStyles}
`

const Button = ({
  buttonText,
  buttonLink,
  buttonIcon,
  isExternalLink = false,
  isNavButton,
  ...restProps
}) => (
  <Fragment>
    {isExternalLink ? (
      <ExternalLink
        target="_blank"
        rel="noopener noreferrer"
        href={buttonLink}
        {...restProps}
      >
        {buttonIcon}
        {buttonText}
      </ExternalLink>
    ) : isNavButton ? (
      <NavButton to={buttonLink} {...restProps}>
        {buttonIcon}
        {buttonText}
      </NavButton>
    ) : (
      <InteractiveButton {...restProps}>
        {buttonIcon}
        {buttonText}
      </InteractiveButton>
    )}
  </Fragment>
)

export default Button
