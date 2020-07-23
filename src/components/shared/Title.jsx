import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[500]};
  font-weight: ${({ theme }) => theme.fontWeight[2]};
  margin: ${({ theme }) => theme.space[6]} 0 ${({ theme }) => theme.space[5]} 0;
  line-height: 1.3;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.up.md} {
    line-height: 1.2;
    font-size: ${({ theme }) => theme.fontSize[600]};
    margin: ${({ theme }) => theme.space[7]} 0 ${({ theme }) => theme.space[4]}
      0;
  }
`

const Title = ({ children }) => <TitleWrapper>{children}</TitleWrapper>

export default Title
