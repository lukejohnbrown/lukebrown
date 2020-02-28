import React from 'react'
import styled from "styled-components";

import theme from "../../theme";

const ContainerWrapper = styled.div`
  width: 100%;
  padding: 0 ${theme.space[4]};
  max-width: 500px;
  margin: 0 auto;

  @media(min-width: 360px) {
    padding: 0 ${theme.space[5]};
  }

  @media(min-width: 560px) {
    padding: 0;
  }
`;

const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}

export default Container;
