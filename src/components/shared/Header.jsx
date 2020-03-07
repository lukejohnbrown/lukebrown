import React from 'react'
import styled from "styled-components";

import { Container, Navigation } from ".";
import logo from "../../images/logo.svg";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 37px;
  border: 1px solid #F5F5F5;
  @media ${({ theme }) => theme.breakpoints.up.sm} {
    width: 40px;
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
