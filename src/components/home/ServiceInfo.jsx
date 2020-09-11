import React from "react"
import styled from "styled-components"
import ReactBodymovin from "react-bodymovin"

const ServiceInfoWrapper = styled.div``

const TitleWrapper = styled.h3`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight[2]};
  margin-bottom: ${({ theme }) => theme.space[2]};
`

const IconWrapper = styled.div`
  width: 40px;
  margin-right: ${({ theme }) => theme.space[3]};
`

const Content = styled.p`
  margin-top: ${({ theme }) => theme.space[3]};
  line-height: 2;
`

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
}

const ServiceInfo = ({ icon, title, children }) => (
  <ServiceInfoWrapper>
    <TitleWrapper>
      <IconWrapper>
        <ReactBodymovin
          options={{
            ...bodymovinOptions,
            animationData: icon,
          }}
        />
      </IconWrapper>
      {title}
    </TitleWrapper>

    {children && <Content>{children}</Content>}
  </ServiceInfoWrapper>
)

export default ServiceInfo
