import React from 'react'
import { Link } from "gatsby";
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.space[7]};
`;

const FooterButton = styled(Link)`
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

const FooterLinks = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space[5]};

  @media ${({ theme }) => theme.breakpoints.up.md} {
    margin-top: ${({ theme }) => theme.space[6]};
  }

  a {
    font-weight: ${({ theme }) => theme.fontWeight[1]};
    text-decoration: none;
    color: ${({ theme }) => theme.palette.darkGrey};
    transition: all 200ms;

    &:first-child {
      margin-right: ${({ theme }) => theme.space[5]};
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.palette.text};
    }
  }
`;

const Footer = ({ buttonText, buttonLink }) => {
  return (
    <FooterWrapper>
      {buttonText  && buttonLink && (
        <FooterButton to={buttonLink}>{buttonText}</FooterButton>
      )}
      <FooterLinks>
        <a href="mailto:hello@lukebrown.io" target="_blank" rel="noreffer">hello@lukebrown.io</a>
        <a href="https://twitter.com/Lukejohnbrown" target="_blank" rel="noreffer">@lukejohnbrown</a>
      </FooterLinks>
    </FooterWrapper>
  )
}

export default Footer
