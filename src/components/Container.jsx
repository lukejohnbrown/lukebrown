import React from 'react'
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  max-width: 500px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}

export default Container;
