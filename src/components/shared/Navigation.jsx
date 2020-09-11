import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`

const NavigationItem = styled.li`
  opacity: ${({ isUnfocused }) => (isUnfocused ? "0.4" : "1")};
  font-weight: ${({ theme }) => theme.fontWeight[1]};

  &:not(:last-child) {
    padding-right: ${({ theme }) => theme.space[3]};
    @media (min-width: 360px) {
      padding-right: ${({ theme }) => theme.space[5]};
    }

    @media ${({ theme }) => theme.breakpoints.up.sm} {
      padding-right: ${({ theme }) => theme.space[7]};
    }
  }
`

const NavigationLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

const Navigation = () => {
  const [hoveredLink, setHoveredLink] = useState()
  const renderMenuItem = ({ uri, title }) => (
    <NavigationItem
      onMouseOver={() => setHoveredLink(uri)}
      onMouseLeave={() => setHoveredLink(null)}
      isUnfocused={hoveredLink && hoveredLink !== uri}
    >
      <NavigationLink to={`/${uri}`}>{title}</NavigationLink>
    </NavigationItem>
  )

  return (
    <>
      <NavigationList>
        {renderMenuItem({ uri: "work", title: "Work" })}
        {renderMenuItem({ uri: "contact", title: "Contact" })}
        {renderMenuItem({ uri: "writing", title: "Writing" })}
      </NavigationList>
    </>
  )
}

export default Navigation
