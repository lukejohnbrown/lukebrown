import React from "react"
import styled from "styled-components"

import { DesignIcon, WordpressIcon, SPAIcon } from "../shared"

const PortfolioItemWrapper = styled.div`
  h3 {
    color: ${({ theme }) => theme.palette.text};
    font-weight: ${({ theme }) => theme.fontWeight[1]};
    font-size: ${({ theme }) => theme.fontSize[200]};
    margin-top: ${({ theme }) => theme.space[4]};
  }

  h4 {
    color: ${({ theme }) => theme.palette.text};
    font-size: ${({ theme }) => theme.fontSize[200]};
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
    background: ${({ theme }) => theme.palette.yellow};
    color: ${({ theme }) => theme.palette.black};
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 6px;
    right: 0;
    padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
    font-weight: ${({ theme }) => theme.fontWeight[1]};
    text-decoration: none;
    transition: all 200ms;

    svg {
      margin: -1px ${({ theme }) => theme.space[1]} 0 0;
    }
  }

  span {
    opacity: 0.8;
  }

  a {
    &:hover,
    &:focus {
      background: ${({ theme }) => theme.palette.black};
      color: white;
      svg {
        path {
          fill: white;
        }
      }
    }
  }
`

const Features = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: ${({ theme }) => theme.space[3]} 0;
`

const Feature = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.iconColor};
  font-weight: ${({ theme }) => theme.fontWeight[0]};
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
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00153 0.5C2.69313 0.5 0.00152588 3.1916 0.00152588 6.5C0.00152588 9.8084 2.69313 12.5 6.00153 12.5C9.30993 12.5 12.0015 9.8084 12.0015 6.5C12.0015 3.1916 9.30993 0.5 6.00153 0.5ZM10.6684 6.5C10.6684 7.21578 10.5016 7.8926 10.2114 8.50016H7.33465C6.65731 8.50016 6.66809 7.83313 6.66809 7.83313C6.66809 7.46656 6.36809 7.16656 6.00153 7.16656H4.77945C4.76023 7.16656 4.74429 7.17688 4.72554 7.17781C4.70538 7.17688 4.68898 7.16656 4.66835 7.16656C4.30132 7.16656 4.00132 6.86656 4.00132 6.5C4.00132 6.13344 4.30132 5.83344 4.66835 5.83344V5.82922L6.00143 5.83344C6.368 5.83344 6.668 5.53344 6.668 5.16687C6.668 5.16687 6.668 4.49984 7.33456 4.49984H8.00159C8.36816 4.49984 8.66816 4.19984 8.66816 3.83328V2.67594C9.8756 3.52063 10.6683 4.9185 10.6683 6.49998L10.6684 6.5ZM1.3346 6.49998C1.3346 6.27544 1.35616 6.05607 1.38663 5.83998C1.996 5.87748 2.00163 6.49998 2.00163 6.49998C2.00163 6.86654 2.30163 7.16654 2.66819 7.16654C2.66819 7.16654 3.33476 7.1806 3.33476 7.8331V8.50014C3.33476 8.8667 3.63476 9.1667 4.00132 9.1667C4.66835 9.1667 4.66835 9.83326 4.66835 9.83326V10.97C2.74367 10.3948 1.33463 8.60935 1.33463 6.49999"
              fill="black"
            />
          </svg>
          Visit website
        </a>
      ) : (
        <span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00153 0.5C2.69313 0.5 0.00152588 3.1916 0.00152588 6.5C0.00152588 9.8084 2.69313 12.5 6.00153 12.5C9.30993 12.5 12.0015 9.8084 12.0015 6.5C12.0015 3.1916 9.30993 0.5 6.00153 0.5ZM10.6684 6.5C10.6684 7.21578 10.5016 7.8926 10.2114 8.50016H7.33465C6.65731 8.50016 6.66809 7.83313 6.66809 7.83313C6.66809 7.46656 6.36809 7.16656 6.00153 7.16656H4.77945C4.76023 7.16656 4.74429 7.17688 4.72554 7.17781C4.70538 7.17688 4.68898 7.16656 4.66835 7.16656C4.30132 7.16656 4.00132 6.86656 4.00132 6.5C4.00132 6.13344 4.30132 5.83344 4.66835 5.83344V5.82922L6.00143 5.83344C6.368 5.83344 6.668 5.53344 6.668 5.16687C6.668 5.16687 6.668 4.49984 7.33456 4.49984H8.00159C8.36816 4.49984 8.66816 4.19984 8.66816 3.83328V2.67594C9.8756 3.52063 10.6683 4.9185 10.6683 6.49998L10.6684 6.5ZM1.3346 6.49998C1.3346 6.27544 1.35616 6.05607 1.38663 5.83998C1.996 5.87748 2.00163 6.49998 2.00163 6.49998C2.00163 6.86654 2.30163 7.16654 2.66819 7.16654C2.66819 7.16654 3.33476 7.1806 3.33476 7.8331V8.50014C3.33476 8.8667 3.63476 9.1667 4.00132 9.1667C4.66835 9.1667 4.66835 9.83326 4.66835 9.83326V10.97C2.74367 10.3948 1.33463 8.60935 1.33463 6.49999"
              fill="black"
            />
          </svg>
          Coming soon
        </span>
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
