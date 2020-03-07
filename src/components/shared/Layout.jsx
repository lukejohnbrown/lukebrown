
import React from 'react';
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
      <Helmet
        title="Box Shadows"
        meta={[
          {
            name: "description",
            content: "TODO",
          },
          {
            name: "keywords",
            content: "TODO",
          },
        ]}
      />

      <LayoutWrapper>
        <Header />
        <main>{children}</main>
      </LayoutWrapper>
    </ThemeProvider>
  )
};

export default Layout;