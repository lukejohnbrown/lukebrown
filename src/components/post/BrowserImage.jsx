import React from "react"
import styled from "styled-components"

import chromeHeader from "../../images/chrome-header.svg"

const BrowserImageWrapper = styled.div`
  border-radius: 0.3rem;
  margin: ${({ theme }) => theme.space[4]} auto;
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  p {
    position: absolute;
  }
`

const BrowserImage = ({ imageUrl, imageAlt = "" }) => (
  <BrowserImageWrapper>
    <img src={chromeHeader} alt="" />
    <img src={imageUrl} alt={imageAlt} />
  </BrowserImageWrapper>
)

export default BrowserImage
