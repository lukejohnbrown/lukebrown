import React from 'react'
import { Link } from "gatsby";
import styled from "styled-components";

import theme from "../theme";

const NavigationWrapper = styled.nav`

`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: ${theme.space[6]};
    @media ${theme.breakpoints.up.sm} {
      margin-right: ${theme.space[7]};
    }
  }
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  font-weight: ${theme.fontWeight[1]};
  opacity: 0.5;
  transition: all 200ms;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem>
          <NavigationLink>Work</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Contact</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Writing</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
