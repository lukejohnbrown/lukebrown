import React from 'react'
import styled from "styled-components";

const ServiceInfoWrapper = styled.div`
  background: ${({ theme }) => theme.palette.grey};
  padding: ${({ theme }) => theme.space[4]};
  margin: 0 -${({ theme }) => theme.space[4]};

  @media(min-width: 360px) {
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[5]};
    margin: 0 -${({ theme }) => theme.space[5]};
  }

  @media ${({ theme }) => theme.breakpoints.up.md} {
    padding: ${({ theme }) => theme.space[4]};
    margin: 0 -${({ theme }) => theme.space[4]};
  };
`;

const TitleWrapper = styled.h3`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight[1]};
  svg {
    margin-right: ${({ theme }) => theme.space[2]};
    @media ${({ theme }) => theme.breakpoints.up.md} {
     margin-right: ${({ theme }) => theme.space[3]};
     transform: translateY(-1px);
    };
  }
`;

const Content = styled.p`
  margin-top: ${({ theme }) => theme.space[3]};
`;


const ServiceInfo = ({ icon, title, children }) => {
  return (
    <ServiceInfoWrapper>
      <TitleWrapper>
        {icon}
        {title}
      </TitleWrapper>

      {children && (
        <Content>{children}</Content>
      )}
    </ServiceInfoWrapper>
  )
}

export default ServiceInfo
