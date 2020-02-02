
import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Header } from ".";
import theme from "../theme";

const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
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
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
};

export default DefaultLayout;