import React from "react"
import styled from "styled-components"

import folderIcon from "../../images/folder-icon.svg"

const DirectoryText = styled.div`
  font-family: ${({ theme }) => theme.codeFontFamily};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize[-100]};
  font-weight: ${({ theme }) => theme.fontWeight[2]};
  background: #3c3c3c;
  color: white;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]};
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  margin-bottom: -10px;

  img {
    width: 19px;
    margin-right: ${({ theme }) => theme.space[1]};
  }
`

const Directory = ({ path }) => (
  <DirectoryText>
    <img src={folderIcon} alt="" />
    {path}
  </DirectoryText>
)

export default Directory
