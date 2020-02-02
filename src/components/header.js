import React from 'react'
import styled from "styled-components";

import { Container, Navigation } from ".";
import theme from "../theme";
import logo from "../images/logo.svg";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  @media ${theme.breakpoints.up.sm} {
    width: 45px;
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={logo} alt="Luke Brown logo" />

        <Navigation />
      </HeaderWrapper>
    </Container>
  )
}

export default Header
