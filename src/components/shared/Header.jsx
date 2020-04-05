import React from 'react';
import { Link } from "gatsby";
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
  @media (min-width: 365px) {
    width: 45px;
  }

  @media ${({ theme }) => theme.breakpoints.up.sm} {
    width: 43px;
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">
          <Logo src={logo} alt="Luke Brown logo" />
        </Link>

        <Navigation />
      </HeaderWrapper>
    </Container>
  )
}

export default Header
