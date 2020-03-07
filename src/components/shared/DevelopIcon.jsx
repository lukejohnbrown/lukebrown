import React from 'react'
import styled from "styled-components";

const DevelopIconWrapper = styled.svg`
  width: 33px;
  height: 33px;

  path {
    fill: ${({ theme }) => theme.palette.iconColor};
    border-color: ${({ theme }) => theme.palette.iconColor};
  }
`;

const DevelopIcon = () => {
  return (
    <DevelopIconWrapper width="85" height="65" viewBox="0 0 85 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.391 49.262L10.559 32.442L27.391 15.61L22.4418 10.6608L0.660767 32.4418L22.4418 54.2118L27.391 49.262Z" fill="black"/>
      <path d="M58.23 15.609L75.05 32.441L58.23 49.261L63.1792 54.2102L84.9492 32.4402L63.1792 10.6592L58.23 15.609Z" fill="black"/>
      <path d="M32.012 62.383L47.875 0.773987L54.6523 2.52009L38.7893 64.1291L32.012 62.383Z" fill="black"/>
    </DevelopIconWrapper>
  )
}

export default DevelopIcon
