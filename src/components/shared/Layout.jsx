
import React from 'react';
import { Transition } from "react-spring/renderprops";
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, Header } from ".";

import theme from "../../theme";

const LayoutWrapper = styled.div`
  padding: ${({ theme }) => theme.space[4]} 0;
  @media(min-width: 360px) {
    padding: ${({ theme }) => theme.space[5]} 0;
  }

   @media ${({ theme }) => theme.breakpoints.up.md} {
    padding: ${({ theme }) => theme.space[8]} 0;
    margin-left: -${({ theme }) => theme.space[10]};
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme(false)}>
      <GlobalStyle />

      <LayoutWrapper>
          <Transition
            config={{ duration: 300, delay: 100 }}
            from={{ opacity: 0, transform: "translateY(-20px)" }}
            enter={{ opacity: 1, transform: "translateY(0)" }}
            leave={{ opacity: 0, transform: "translateY(-20px)" }}
          >
            {() => style => <div style={style}><Header /></div>}
          </Transition>
          <Transition
            config={{ duration: 300, delay: 200 }}
            from={{ opacity: 0, transform: "translateY(-20px)" }}
            enter={{ opacity: 1, transform: "translateY(0)" }}
            leave={{ opacity: 0, transform: "translateY(-20px)" }}
          >
          {() => style => <main style={style}>{children}</main>}
        </Transition>
      </LayoutWrapper>
    </ThemeProvider>
  )
};

export default Layout;