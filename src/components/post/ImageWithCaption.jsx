import React from "react"
import styled from "styled-components"

const Figure = styled.figure`
  img {
    width: 100%;
  }

  figcaption {
    padding: ${({ theme }) => theme.space[2]};
    border-top: 1px solid ${({ theme }) => theme.palette.yellow};
    background: ${({ theme }) => theme.palette.grey};
    font-size: ${({ theme }) => theme.fontSize[-100]};
    line-height: 1.3;
  }
`

const ImageWithCaption = ({ imageUrl, imageAlt = "", caption }) => (
  <Figure>
    <img src={imageUrl} alt={imageAlt} />
    <figcaption>{caption}</figcaption>
  </Figure>
)

export default ImageWithCaption
