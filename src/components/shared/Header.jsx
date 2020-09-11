import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Navigation } from "."
import logo from "../../images/logo.svg"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 43px;
  @media (min-width: 365px) {
    width: 45px;
  }

  @media ${({ theme }) => theme.breakpoints.up.sm} {
    width: 50px;
  }
`

const Header = () => (
  <Container>
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt="Luke Brown logo" />
      </Link>

      <Navigation />
    </HeaderWrapper>
  </Container>
)

export default Header
