import React from "react"
import styled from "styled-components"

import { DesignIcon, WordpressIcon, SPAIcon } from "../shared"

const PortfolioItemWrapper = styled.div`
  h3 {
    color: ${({ theme }) => theme.palette.text};
    font-weight: ${({ theme }) => theme.fontWeight[2]};
    font-size: ${({ theme }) => theme.fontSize[200]};
    margin-top: ${({ theme }) => theme.space[4]};
  }

  h4 {
    color: ${({ theme }) => theme.palette.text};
    font-size: ${({ theme }) => theme.fontSize[200]};
  }

  p {
    line-height: 2;
  }
`

const PortfolioImage = styled.img`
  width: 100%;
`

const PortfolioImageWrapper = styled.div`
  position: relative;
  width: calc(
    100% + ${({ theme }) => theme.space[4]} + ${({ theme }) => theme.space[4]}
  );
  margin: 0 -${({ theme }) => theme.space[4]};

  @media (min-width: 360px) {
    width: calc(
      100% + ${({ theme }) => theme.space[5]} + ${({ theme }) => theme.space[5]}
    );
    margin: 0 -${({ theme }) => theme.space[5]};
  }

  @media (min-width: 500px) {
    margin: 0;
    width: 100%;
  }

  a,
  span {
    background: black;
    color: white;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 6px;
    border-top-left-radius: 6px;
    right: 0;
    padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
    font-weight: ${({ theme }) => theme.fontWeight[1]};
    text-decoration: none;
    transition: all 200ms;
  }

  span {
    opacity: 0.8;
  }

  a {
    &:hover,
    &:focus {
      background: ${({ theme }) => theme.palette.black};
      color: white;
    }
  }
`

const Features = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: ${({ theme }) => theme.space[4]} 0;
`

const Feature = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight[1]};
  margin-right: ${({ theme }) => theme.space[1]};

  @media (min-width: 335px) {
    margin-right: ${({ theme }) => theme.space[3]};
  }

  @media (min-width: 350px) {
    margin-right: ${({ theme }) => theme.space[4]};
  }

  @media ${({ theme }) => theme.breakpoints.up.xs} {
    margin-right: ${({ theme }) => theme.space[5]};
  }

  svg {
    margin: -1px ${({ theme }) => theme.space[1]} 0 0;
  }
`

const FEATURE_ASSETS = {
  DESIGN: {
    icon: <DesignIcon width="25" height="27" viewBox="0 0 20 25" isSmall />,
    title: "Bespoke design",
  },
  WORDPRESS: {
    icon: <WordpressIcon width="22" height="21" isSmall />,
    title: "Wordpress CMS",
  },
  SPA: {
    icon: <SPAIcon />,
    title: "React App",
  },
}

const PortfolioItem = ({
  image,
  title,
  subtitle,
  features,
  description,
  url,
}) => (
  <PortfolioItemWrapper id="portfolio-item">
    <PortfolioImageWrapper url={url}>
      <PortfolioImage src={image} alt={`${subtitle}`} />
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Visit website
        </a>
      ) : (
        <span>Coming soon</span>
      )}
    </PortfolioImageWrapper>

    {title && <h3>{title}</h3>}

    {subtitle && <h4>{subtitle}</h4>}

    <Features>
      {features &&
        features.map(feature => (
          <Feature key={feature}>
            {FEATURE_ASSETS[feature].icon}
            {FEATURE_ASSETS[feature].title}
          </Feature>
        ))}
    </Features>

    {description && <p>{description}</p>}
  </PortfolioItemWrapper>
)

export default PortfolioItem
