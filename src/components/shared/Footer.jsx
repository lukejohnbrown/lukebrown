import React from 'react'
import styled from 'styled-components';

import Button from "./Button";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.space[7]};
`;

const ButtonWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.space[5]};

  @media ${({ theme }) => theme.breakpoints.up.md} {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;

const FooterLinks = styled.div`
  display: flex;

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

const Footer = ({ buttonText, buttonLink, isExternalLink = false, isNavButton = true, buttonIcon }) => {
  return (
    <FooterWrapper>
      {buttonText && buttonLink && (
        <ButtonWrapper>
          <Button isNavButton={isNavButton} isExternalLink={isExternalLink}  buttonIcon={buttonIcon} buttonLink={buttonLink} buttonText={buttonText} />
        </ButtonWrapper>
      )}
      <FooterLinks>
        <a href="mailto:hello@lukebrown.io" target="_blank"  rel="noopener noreferrer" >hello@lukebrown.io</a>
        <a href="https://twitter.com/Lukejohnbrown" target="_blank"  rel="noopener noreferrer" >@lukejohnbrown</a>
      </FooterLinks>
    </FooterWrapper>
  )
}

export default Footer;
