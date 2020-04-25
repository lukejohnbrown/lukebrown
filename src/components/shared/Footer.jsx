import React from "react"
import styled from "styled-components"

import { YouTubeIcon, Button } from "."

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.space[7]};
`

const ButtonWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.space[5]};

  @media ${({ theme }) => theme.breakpoints.up.md} {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`

const FooterLinks = styled.div`
  display: flex;

  a {
    font-weight: ${({ theme }) => theme.fontWeight[1]};
    text-decoration: none;
    color: ${({ theme }) => theme.palette.darkGrey};
    transition: all 200ms;

    &:first-child {
      margin-right: ${({ theme }) => theme.space[3]};

      @media (min-width: 350px) {
        margin-right: ${({ theme }) => theme.space[5]};
      }
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.palette.text};
    }
  }
`

const FooterBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const YouTubeLink = styled.a`
  display: block;
`

const Footer = ({
  buttonText,
  buttonLink,
  isExternalLink = false,
  isNavButton = true,
  buttonIcon,
}) => (
  <FooterWrapper>
    {buttonText && buttonLink && (
      <ButtonWrapper>
        <Button
          isNavButton={isNavButton}
          isExternalLink={isExternalLink}
          buttonIcon={buttonIcon}
          buttonLink={buttonLink}
          buttonText={buttonText}
        />
      </ButtonWrapper>
    )}
    <FooterBase>
      <FooterLinks>
        <a
          href="mailto:hello@lukebrown.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello@lukebrown.io
        </a>
        <a
          href="https://twitter.com/Lukejohnbrown"
          target="_blank"
          rel="noopener noreferrer"
        >
          @lukejohnbrown
        </a>
      </FooterLinks>
      <YouTubeLink
        href="https://www.youtube.com/channel/UC9nclCC4VwpQdrUb2nE4mdg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </YouTubeLink>
    </FooterBase>
  </FooterWrapper>
)

export default Footer
